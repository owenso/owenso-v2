from django.contrib import admin
from .models import Bio, SelfPhoto

# Register your models here.


@admin.register(Bio)
class BioAdmin(admin.ModelAdmin):
    pass

@admin.register(SelfPhoto)
class SelfPhotoAdmin(admin.ModelAdmin):
    pass
