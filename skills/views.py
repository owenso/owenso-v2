from django.shortcuts import render
from .models import Skill
from django.http import JsonResponse
# Create your views here.
def getAllSkills(request):
    my_queryset = Skill.objects.all()
    data = [{'name': skill.name, 'description': skill.description, 'rating':skill.rating}
            for skill in my_queryset]
    return JsonResponse(data, safe=False)
