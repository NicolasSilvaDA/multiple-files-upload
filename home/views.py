from django.shortcuts import render
from django.http import HttpRequest, JsonResponse
from django.conf import settings
import os
from django.core.files.storage import FileSystemStorage

# Create your views here.


def upload_view(request):
    return render(
        request,
        "home/home.html"
    )

def upload_files(request):
    if request.method == 'POST':
        uploaded_files = request.FILES.getlist('files')
        file_data = []
        
        for file in uploaded_files:
            fs =  FileSystemStorage()
            filename = fs.save(file.name, file)
            file_url = fs.url(filename)
            file_data.append({'name': file.name,
                              'url': file_url})
            
        return JsonResponse({'uploaded_files': file_data})