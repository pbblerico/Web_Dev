from django.contrib import admin
from django.urls import path
from api.views import *

urlpatterns = [
    path('companies/', api_company.CompanyListApi.as_view()),
    path('companies/<int:id>/', api_company.CompanyDetailApi.as_view()),
    path('companies/<int:id>/vacancies/', api_company.getCompanyVacancies),
    path('vacancies/', api_vacancy.apiVacanciesList),
    path('vacancies/<int:id>/', api_vacancy.apiVacancyDetail),
    path('vacancies/top_ten/', topTenVacanciesList)
]