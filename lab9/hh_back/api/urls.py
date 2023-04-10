from django.contrib import admin
from django.urls import path
from api.views import *

urlpatterns = [
    path('companies/', getCompanyList),
    path('companies/<int:id>/', getCompanyById),
    path('companies/<int:id>/vacancies/', getCompanyVacancies),
    path('vacancies/', getVacanciesList),
    path('vacancies/<int:id>/', getVacancyById),
    path('vacancies/top_ten/', topTenVacanciesList)
]
        