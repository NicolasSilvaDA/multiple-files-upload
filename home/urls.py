from django.urls import path
from home.views import upload_view

urlpatterns = [
    path('', upload_view, name="upload_files"),
]
