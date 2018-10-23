from django.conf.urls import url
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
    url('bio/', views.getBio, name='bio'),
    url('photo/', views.getPhoto, name='photo'),
    url('insta/', views.getInsta, name='insta')

]

# if settings.DEBUG:
#     urlpatterns += static(settings.MEDIA_URL,
#                           document_root=settings.MEDIA_ROOT)
