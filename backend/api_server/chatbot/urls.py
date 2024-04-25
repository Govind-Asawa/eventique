from django.urls import path
from . import views

urlpatterns = [
    path('generate-plan/', views.generate_plan, name='chatbot/generate-plan'),
    path('status_check/', views.status_check, name='chatbot/status_check'),
    path('approve-plan/', views.finalize_plan, name='chatbot/approve-plan'),
]