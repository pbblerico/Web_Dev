from django.shortcuts import render
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from api.models import Company
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404
from django.http import HttpResponse
import json
from api.serializers import *


class CompanyListApi(APIView):
    def get(self, request):
        companies = Company.objects.all()
        return JsonResponse(CompanySerializer(companies, many=True).data, safe=False)
    
    def post(self, request):
        serializer = CompanySerializer(data=request.data)
        serializer.is_valid(raise_exception=True)   
        serializer.save()

        return JsonResponse(serializer.data)

def getCompany(id):
    try:
        return Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': 'company doesn\'t exist'})

class CompanyDetailApi(APIView):


    def get(self, request, id):
        company = getCompany(id)
        serializer = CompanySerializer(company)

        return JsonResponse(serializer.data)
    
    def put(self, request, id):
        company = getCompany(id)
        serializer = CompanySerializer(company, data=request.data)
        serializer.is_valid(raise_exception=True)  
        serializer.save()

        return JsonResponse(serializer.data)
    
    def delete(self, request, id):
        company = getCompany(id)
        company.delete()

        return JsonResponse({'deleted': True})


def getCompanyVacancies(request, id)    :
    company = getCompany(id)
    vacancies = company.company.all()
    vacancies_json = VacancySerializer(vacancies, many=True)
    
    return JsonResponse(vacancies_json.data, safe=False)

