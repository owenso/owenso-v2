from django.db import models

# Create your models here.

# https://goodcode.io/articles/django-singleton-models/
class SingletonModel(models.Model):
    class Meta:
        abstract = True

    def save(self, *args, **kwargs):
        self.__class__.objects.exclude(id=self.id).delete()
        super(SingletonModel, self).save(*args, **kwargs)

    @classmethod
    def load(cls):
        try:
            return cls.objects.get()
        except cls.DoesNotExist:
            return cls()


class Bio(SingletonModel):
    text = models.TextField(blank=True)

    class Meta(object):
        verbose_name_plural = "bio"


class SelfPhoto(SingletonModel):
    image = models.ImageField(upload_to='me/', null=False)

    class Meta(object):
        verbose_name_plural = "Self Photo"
