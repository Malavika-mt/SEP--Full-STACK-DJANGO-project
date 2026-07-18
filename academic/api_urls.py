from django.http import JsonResponse
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'courses', views.CourseViewSet)
router.register(r'students', views.StudentViewSet)
# router.register(r'departments', views.departmentViewSet)


def api_index(request):
    return JsonResponse({
        "status": "ok",
        "endpoints": {
            "departments": "/academic/api/departments/",
            "courses": "/academic/api/courses/",
            "students": "/academic/api/students/"
        }
    })


urlpatterns = [
    path('', api_index, name='academic_api_index'),
    path('', include(router.urls)),
]
