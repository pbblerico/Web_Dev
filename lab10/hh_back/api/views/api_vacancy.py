from django.shortcuts import render
from django.http.response import JsonResponse
from rest_framework.decorators import api_view
from api.models import Company
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404
import json
from api.serializers import *

@api_view(['GET', 'POST'])
def apiVacanciesList(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        return JsonResponse(VacancySerializer(vacancies, many=True).data, safe=False)
    if request.method == 'POST':
        serializer = VacancySerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return JsonResponse(serializer.data)

def getVacancy(id):
        try:
            return Vacancy.objects.get(id=id)
        except Vacancy.DoesNotExist as e:
            return JsonResponse({'error': 'vacancy doesn\'t exist'})


@api_view(['GET', 'POST', 'PUT', 'DELETE'])
def apiVacancyDetail(request, id):

    if request.method == 'GET':
        vacancy = getVacancy(id)
        serializer = VacancySerializer(vacancy)

        return JsonResponse(serializer.data)
    if request.method == 'PUT':
        vacancy = getVacancy(id)
        serializer = VacancySerializer(vacancy, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return JsonResponse(serializer.data)

    if request.method == 'DELETE':
        vacancy = getVacancy(id)
        vacancy.delete()
        return JsonResponse({'deleted': True})

def topTenVacanciesList(request):
    topTen = Vacancy.objects.order_by('-salary')[:10]
    return JsonResponse(VacancySerializer(topTen, many=True).data, safe=False)
