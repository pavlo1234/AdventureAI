from rest_framework import serializers
from .models import *

class PreferenceSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Preference
        fields = ['id', 'icon_url', 'label']