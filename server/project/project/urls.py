"""
URL configuration for project project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path, include

from rest_framework_simplejwt.views import TokenRefreshView

from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView

from . import views

urlpatterns = [

    path("api/sign-up/", views.sign_up, name="sign-up"),
    path("api/sign-in/", views.sign_in, name="sign-in"),
    path("api/token/", TokenRefreshView.as_view(), name="token-refresh"),

    path("api/activities/", include("activities.urls")),
    path("api/preferences/", include("preferences.urls")),
    path("api/recommendations/", include("recommendations.urls")),


    path('schema/', SpectacularAPIView.as_view(), name='schema'),
    path('docs/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
]
