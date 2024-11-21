

# Create your views here.
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response

from drf_spectacular.utils import extend_schema, OpenApiResponse

from .serializers import UserPreferencesSerializator, RecommendationsSerializator

from activities.models import Activity

from . import algorithms

@extend_schema(
    description="Отримання списку рекомендацій за вподобаннями та локацією",
    request=UserPreferencesSerializator,
    responses={
        200: RecommendationsSerializator,
        400: OpenApiResponse(description="Bad request")
    }
)
@api_view(["POST"])
@permission_classes([IsAuthenticated])
def recommend(request):
    serialized = UserPreferencesSerializator(data=request.data)
    serialized.is_valid()

    location, tags = serialized.data['location'], serialized.data['tags']
    choices = Activity.objects.filter(location__city=location["city"], location__country=location["country"])
        
    choosen = algorithms.choose_relevant(choices, tags)

    response = RecommendationsSerializator({
        'header' : 'We strongly recommend to visit',
        'activities' : choosen
    })
    
    return Response(data=response.data, status=400)