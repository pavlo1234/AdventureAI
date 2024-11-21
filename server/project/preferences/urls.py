
from django.urls import path
from .views import preferences_list

urlpatterns = [
    path('', preferences_list, name="preferences-list")
]