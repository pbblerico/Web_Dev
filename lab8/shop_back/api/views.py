from django.shortcuts import render
from django.http.response import HttpResponse, JsonResponse
from api.models import *

products = Product.objects.all()
products_json = [p.to_json() for p in products]

categories = Category.objects.all()
categories_json = [c.to_json() for c in categories]

# Create your views here.
def products(request):
    return JsonResponse(products_json, safe=False)

def productById(request, id):
    for product in products_json:
        if product['id'] == id: 
            return JsonResponse(product)
    
    return {'error': 'no such id'}

def categories(request):
    return JsonResponse(categories_json, safe=False)

def categoryById(request, id):
    for category in categories_json:
        if category['id'] == id: 
            return JsonResponse(category)
    
    return {'error': 'no such id'}

def productsByCategory(request, id):
    name = 'null'
    for category in categories_json:
        if category['id'] == id: 
            name = category['name']

    categoryProducts = []
    for product in products_json:
        if product['category'] == name: 
            categoryProducts.append(product)
    
    
    return JsonResponse(categoryProducts, safe=False)
