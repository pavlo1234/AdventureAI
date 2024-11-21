from django.db import models

# Create your models here.
class Preference(models.Model):
    icon_url = models.URLField(max_length=500, unique=False)
    label = models.CharField(max_length=256)