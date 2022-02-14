from django.contrib import admin
from django.urls import path, include
from todo import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'todos', views.TodoView, 'todo')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls))
]
