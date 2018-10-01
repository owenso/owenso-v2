from django.db import models
from django.utils import timezone

# Create your models here.
class Skill(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    created_date = models.DateTimeField(
        default=timezone.now)
    rating = models.IntegerField()

    def __str__(self):
        return self.name
