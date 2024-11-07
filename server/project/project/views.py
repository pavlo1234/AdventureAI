
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

from django.http import HttpResponse, JsonResponse

from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import CredentialsSerializer

from rest_framework.decorators import api_view, permission_classes
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from drf_spectacular.utils import extend_schema, OpenApiResponse

@extend_schema(
    description="Реєстрація користувача за наданим email та паролем",
    request=CredentialsSerializer,
    responses={
        200: TokenObtainPairSerializer
    }
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
                { 
                    'access' : access_token,
                    'refresh' : refresh_token
                }, 
                status=201
        )
    
    return JsonResponse(user_serialized.errors, status=status.HTTP_404_NOT_FOUND)

@extend_schema(
    description="Логування користувача за наданим email та паролем",
    request=CredentialsSerializer,
    responses={
        200: TokenObtainPairSerializer,
        400: OpenApiResponse(description="Bad Request"),
        404: OpenApiResponse(description="User is not found")
    }
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
                {
                    'access' : access_token,
                    'refresh' : refresh_token
                }, 
                status=201
        )
    else:
        return JsonResponse({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)
    
@extend_schema(
    methods='get',
    responses={200: OpenApiResponse("Success")}
)
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def index(request):
    user = request.user
    return HttpResponse(f"Email: {user.email}, password: {user.password}")