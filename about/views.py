from django.shortcuts import render
from .models import Bio, SelfPhoto
from django.http import JsonResponse
import os
import requests
from rest_framework import status

# Create your views here.



def getPhoto(request):
    my_queryset = SelfPhoto.objects.get()
    data = {
        'image': my_queryset.image
    }
    return JsonResponse(data, safe=False)


def getBio(request):
    my_queryset = Bio.objects.get()
    data = {
        'text': my_queryset.text
    }
    return JsonResponse(data, safe=False)

def getInsta(request):
    INSTA_ACCESS_TOKEN = os.environ["INSTA_ACCESS_TOKEN"]
    url = 'https://api.instagram.com/v1/users/self/media/recent/?access_token='

    r = requests.get(url + INSTA_ACCESS_TOKEN)

    if r.status_code == 200:
        data = r.json()
        return JsonResponse(data, status=status.HTTP_200_OK, safe=False)
    else:
        return JsonResponse({"error": "Request failed"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR, safe=False)
