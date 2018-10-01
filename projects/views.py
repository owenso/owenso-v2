from django.shortcuts import render
from .models import Project
from django.http import JsonResponse
# Create your views here.


def getAllProjects(request):
    my_queryset = Project.objects.all()
    data = [{
        'title': project.title, 
        'description': project.description, 
        'link': project.link,
        'screenshot': project.screenshot,
        'skills': project.skills,
        }
            for project in my_queryset]
    return JsonResponse(data, safe=False)
