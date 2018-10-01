from django.db import models
from django.utils import timezone
from skills.models import Skill
# Create your models here.
class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    link = models.URLField()
    screenshot = models.ImageField(upload_to='screenshots/')
    skills = models.ManyToManyField(Skill)
    created_date = models.DateTimeField(
        default=timezone.now)

    def __str__(self):
        return self.title
