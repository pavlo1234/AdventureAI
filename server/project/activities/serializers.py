from rest_framework import serializers
from .models import *

class LocationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Location
        fields = ['city', 'country']

class ImageSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Image
        fields = ['url']


class ActivitySerializer(serializers.ModelSerializer):

    images = ImageSerializer(many=True)
    location = LocationSerializer()

    class Meta:
        model = Activity
        fields = ['id', 'header', 'desc', 'kind', 'location', 'images']
