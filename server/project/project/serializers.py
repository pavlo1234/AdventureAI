from django.contrib.auth.models import User
from rest_framework import serializers


class CredentialsSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['email', 'password']
    def create(self, validated_data):
        user = User(
            username=validated_data['email'],
            email=validated_data['email']
        )
        user.set_password(validated_data['password'])
        
        return user
