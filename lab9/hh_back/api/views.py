from django.shortcuts import render
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from api.models import *
from django.shortcuts import get_object_or_404
import json
# Create your views here.

def getCompanyList(request):
    if request.method == 'GET':
        company_json = [c.to_json() for c in Company.objects.all()]

        return JsonResponse(company_json, safe=False)
    
    # elif request.method == 'PUT':
    #     data = json.loads(request.body)
    #     company_name = data.get("name", '')
    #     company_desc = data.get("description", '')
    #     company_city = data.get("name", '')
    #     company_address = data.get("name", '')
    #     company = Company.objects.create(name=company_name, desc=company_desc, city=company_city, address=company_address)

        # return JsonResponse(company.to_json())

@csrf_exempt
def getCompanyById(request, id):
    company = get_object_or_404(Company, pk=id)

    if request.method == 'GET':
        return JsonResponse(company.to_json())
    
    # if request.method == 'PUT':
    #     data = json.loads(request.body)
    #     new_company_name = data.get('name', company.name)
    #     company.name = new_company_name
    #     company.save()

    #     return JsonResponse(company.to_json())
    
    elif request.method == 'DELETE':
        company.delete()
        return JsonResponse({'deleted': True})
        

def getCompanyVacancies(request, id):
    company = get_object_or_404(Company, pk=id)
    vacancies = company.companies.all()
    vacancies_json = [v.to_json() for v in vacancies]
    
    return JsonResponse(vacancies_json, safe=False)


def getVacanciesList(request):
   vacancies_json = [v.to_json() for v in Vacancy.objects.all()]
   return JsonResponse(vacancies_json, safe=False)

@csrf_exempt
def getVacancyById(request, id):
    try:
        vacancy = Vacancy.objects.get(pk=id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    
    if request.method == 'GET':
        return JsonResponse(vacancy.to_json())
    
    # elif request.method == 'PUT':
    #     data = json.loads(request.body)
    #     new_vacancy_name = data.get('name', vacancy.name)
    #     vacancy.name = new_vacancy_name 
    #     vacancy.save()

    #     return JsonResponse(vacancy.to_json())
    
    elif request.method == 'DELETE':
        vacancy.delete()

        return JsonResponse({'deleted': True})

def topTenVacanciesList(request):
    topTen = Vacancy.objects.order_by('-salary')[:10]
    topTen_json = [v.to_json() for v in topTen]

    return JsonResponse(topTen_json, safe=False)
    

