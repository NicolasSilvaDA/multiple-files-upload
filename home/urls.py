from django.urls import path
from home.views import upload_view, upload_files

urlpatterns = [
    path('', upload_view, name="upload_view"),
    path('upload/', upload_files, name="upload_files"),
]
