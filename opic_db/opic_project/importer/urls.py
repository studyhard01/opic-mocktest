from django.urls import path
from . import views

urlpatterns = [
    path('import-json/', views.import_json_view, name='import-json'),
    ]