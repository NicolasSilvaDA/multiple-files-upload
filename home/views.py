from django.shortcuts import render
from django.http import HttpRequest

# Create your views here.


def upload_view(request):
    return render(
        request,
        "home/home.html"
    )