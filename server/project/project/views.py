
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

from django.http import HttpResponse, JsonResponse
from rest_framework import status

from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from drf_spectacular.utils import extend_schema, OpenApiResponse

from .serializers import CredentialsSerializer

@extend_schema(
    description="Реєстрація користувача за наданим email та паролем",
    request=CredentialsSerializer,
    responses={
        200: TokenObtainPairSerializer,
        400: OpenApiResponse(description="Bad request")
    }
)
@api_view(['POST'])
@permission_classes([AllowAny])
def sign_up(request):
    user_serialized = CredentialsSerializer(data=request.data)
  
    if user_serialized.is_valid():
        if User.objects.filter(email=request.data.get('email')).exists():
            return JsonResponse(
                    { 'error' : "User with given email already exists" }, 
                    status=400
            )
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
    
    return JsonResponse(user_serialized.errors, status=status.HTTP_400_BAD_REQUEST)

@extend_schema(
    description="Логування користувача за наданим email та паролем",
    request=CredentialsSerializer,
    responses={
        200: TokenObtainPairSerializer,
        400: OpenApiResponse(description="Bad request"),
        404: OpenApiResponse(description="User not found")
    }
)
@api_view(['POST'])
@permission_classes([AllowAny])
def sign_in(request):
    user_serialized = CredentialsSerializer(data=request.data)

    if(user_serialized.is_valid()):
        email, password = user_serialized.data["email"], user_serialized.data["password"]
        user = authenticate(request, username=email, password=password)
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
        
    return JsonResponse(user_serialized.errors, status=status.HTTP_400_BAD_REQUEST)
    
@extend_schema(
    methods='get',
    responses={200: OpenApiResponse("Success")}
)
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def index(request):
    user = request.user
    return HttpResponse(f"Email: {user.email}, password: {user.password}")