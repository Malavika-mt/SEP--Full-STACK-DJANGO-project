
from django.urls import path
from . import views

urlpatterns = [
    path('', views.course_list, name='home'),
    # path('students/', views.student_list),
    path('hello/', views.hello_world, name='hello'),
    path('courses/', views.course_list, name='course_list'),
    path("register-student/", views.student_create, name="student_create"),
    path("register/", views.register_user, name="register"),
    # path("api/courses/", views.api_course_list),
]
