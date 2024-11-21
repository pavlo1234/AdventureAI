from django.shortcuts import render

# Create your views here.

from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response

from drf_spectacular.utils import extend_schema, OpenApiResponse

from .models import Preference
from .serializers import PreferenceSerializer

@extend_schema(
    description="Отримання списку тегів-вподобань",
    responses={
        200: PreferenceSerializer,
        400: OpenApiResponse(description="Bad request")
    }
)
@api_view(["GET"])
@permission_classes([IsAuthenticated])
def preferences_list(request):
    queryset = Preference.objects.all()
    serialized = PreferenceSerializer(data=queryset, many=True)

    serialized.is_valid()
    
    return Response(serialized.data, status=200)
    