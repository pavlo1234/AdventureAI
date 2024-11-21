from rest_framework import serializers

from activities.serializers import LocationSerializer, ActivitySerializer

class UserPreferencesSerializator(serializers.Serializer):
    location = LocationSerializer()
    tags = serializers.ListField(child=serializers.CharField(), allow_empty=False)

class RecommendationsSerializator(serializers.Serializer):
    header = serializers.CharField()
    activities = serializers.ListField(child=ActivitySerializer())