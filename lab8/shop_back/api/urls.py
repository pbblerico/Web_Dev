from django.contrib import admin
from django.urls import path, include
from api.views import *

urlpatterns = [
    path('products/', products),
    path('products/<int:id>/', productById),
    path('categories/', categories),
    path('categories/<int:id>', categoryById),
    path('categories/<int:id>/products/', productsByCategory),
]
