from django.db import models


class Location(models.Model):
    address = models.CharField(max_length=256)
    city = models.CharField(max_length=256)
    region = models.CharField(max_length=256)
    country = models.CharField(max_length=256)
    class Meta:
        unique_together = ['city', 'country', 'address', 'region']

class Activity(models.Model):
    header = models.CharField(max_length=256)
    kind = models.CharField(max_length=256)
    desc = models.TextField()
    location = models.ForeignKey(Location, on_delete=models.DO_NOTHING, related_name="activities")


class Image(models.Model):
    url = models.URLField(max_length=1000, unique=False)
    activity = models.ForeignKey(Activity, related_name='images', on_delete=models.CASCADE)