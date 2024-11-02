
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

from django.http import HttpResponse, JsonResponse

from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import CredentialsSerializer

from rest_framework.decorators import api_view, permission_classes
from rest_framework_simplejwt.tokens import RefreshToken


from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi



@swagger_auto_schema(
    method='post',
    request_body=CredentialsSerializer,
    responses={
        201: openapi.Response('User created successfully'),
        400: openapi.Response('User with given email already exists'),
    },
)
@api_view(['POST'])
@permission_classes([AllowAny])
def sign_up(request):
    user_serialized = CredentialsSerializer(data=request.data)
  
    if User.objects.filter(email=request.data.get('email')).exists():
        return JsonResponse(
                { 'error' : "User with given email already exists" }, 
                status=400
        )
    if user_serialized.is_valid():
        user = user_serialized.save()
        user.save()
        refresh = RefreshToken.for_user(user)
        access_token = str(refresh.access_token)
        refresh_token = str(refresh)
        return JsonResponse(
                { 'user_id' : user.id,
                  'token' : {
                      'access' : access_token,
                      'refresh' : refresh_token
                  }
                }, 
                status=201
        )
    
    return JsonResponse(user_serialized.errors, status=status.HTTP_404_NOT_FOUND)


@swagger_auto_schema(
    method='post',
    request_body=CredentialsSerializer,
    responses={
        201: openapi.Response('User is authorized'),
        400: openapi.Response('Bad request'),
        404: openapi.Response('User not found'),
    },
)
@api_view(['POST'])
@permission_classes([AllowAny])
def sign_in(request):
    user = authenticate(request, username=request.data.get('email'), password=request.data.get('password'))
    
    if user is not None:
        refresh = RefreshToken.for_user(user)
        access_token = str(refresh.access_token)
        refresh_token = str(refresh)
        return JsonResponse(
                { 'user_id' : user.id,
                  'token' : {
                      'access' : access_token,
                      'refresh' : refresh_token
                  }
                }, 
                status=201
        )
    else:
        return JsonResponse({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)
    
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def index(request):
    return HttpResponse("Index")