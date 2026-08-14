from urllib import request

import django
from django.shortcuts import render, redirect
from .forms import *
from django.http import HttpResponse
from . models import *
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.decorators import login_required, user_passes_test   

# Create your views here.


# def student_list(request):
#     return HttpResponse("List of Students")

@login_required
def course_list(request):
     courses=Course.objects.all()

     return render(
         request,
         "academic/course_list.html",
         {"courses": courses }
    )

def is_admin(user):
    return user.is_staff

@user_passes_test(is_admin)
def delete_student(request, student_id):
    student = Student.objects.get(id=student_id)
    if student.user:
        student.user.delete()
    else:
        student.delete()
    return redirect('course_list')     

def hello_world(request):
     return HttpResponse("Welcome to University Hub!")

@login_required
def student_profile(request,id):
    profile = Student.objects.get(id=id)
    if request.user!= profile.user:
        return HttpResponse("You are not authorized to view this profile.")
    return HttpResponse("Profile Allowed")




def student_create(request):
    if request.method == 'POST':
        form = StudentForm(request.POST)
        if form.is_valid():
            username = request.POST.get('username', '').strip()
            password = request.POST.get('password', '').strip()
            email = request.POST.get('email', '').strip()

            if not username or not password or not email:
                return render(request, 'academic/student_form.html', {
                    'form': form,
                    'error': 'All login fields are required'
                })

            if User.objects.filter(username=username).exists():
                return render(request, 'academic/student_form.html', {
                    'form': form,
                    'error': 'Username already exists'
                })

            user = User.objects.create_user(
                username=username,
                password=password,
                email=email
            )

            student = form.save(commit=False)
            student.user = user
            student.save()
            form.save_m2m()
            return redirect('course_list')
    else:
        form = StudentForm()

    return render(request, 'academic/student_form.html', {'form': form})





def register_user(request):

    if request.method == 'POST':

        form = UserCreationForm(request.POST)

        if form.is_valid():
            form. save()
            return redirect('login')

    else:
        form = UserCreationForm()

    return render(request, 'registration/register.html',{'form': form})

#------------------------------REST API VIEWS-----------------------------

from django.http import JsonResponse

def api_course_list(request):
    courses = Course.objects.all()
    data={
        'count' : courses.count(),
        'courses' : list(courses.values('name','code','credits'))
    }
    return JsonResponse(data)

#------------------------------REST API VIEWS USING DRF-----------------------------

from rest_framework import viewsets
from .models import *
from .serializers import *
from rest_framework.permissions import IsAuthenticated

class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    

class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    permission_classes = [IsAuthenticated]

class departmentViewSet(viewsets.ModelViewSet):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer
    

