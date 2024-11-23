
from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_activities, name="activities-list"),
    path('<int:id>/', views.get_activity, name="activities-item")
]