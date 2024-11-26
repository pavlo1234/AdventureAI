from django.shortcuts import render

from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response


from drf_spectacular.utils import extend_schema, OpenApiResponse

from .models import *
from .serializers import ActivitySerializer


@extend_schema(
    description="Отримання списку активностей",
    responses={
        200: ActivitySerializer,
        400: OpenApiResponse(description="Bad request")
    }
)
@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_activities(request):
    queryset = Activity.objects.prefetch_related('images')
    serialized = ActivitySerializer(queryset, many=True)
    return Response(data=serialized.data, status=200)


@extend_schema(
    description="Отримання активності за ідентифікатором",
    responses={
        200: ActivitySerializer,
        404: OpenApiResponse(description="Not found")
    }
)
@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_activity(request, id):
    try:
        queryset = Activity.objects.prefetch_related('images').get(id=id)
        serialized = ActivitySerializer(queryset, many=False)
        return Response(data=serialized.data, status=200)
    except Activity.DoesNotExist:
        return Response({"error" : "Activity doesn't exist"}, status=404)