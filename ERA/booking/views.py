from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.
from django.contrib.auth import authenticate, login
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
import json

def home_view(request):
    return render(request, 'index.html')

def booking_view(request):
    return render(request, 'booking.html')

def login_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        email = data.get('email')
        password = data.get('password')
        user = authenticate(request, username=email, password=password)
        if user is not None:
            login(request, user)
            return JsonResponse({'status': 'ok'})
        else:
            return JsonResponse({'status': 'error', 'message': 'Invalid login credentials'})

def signup_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        email = data.get('email')
        password = data.get('password')
        if User.objects.filter(username=email).exists():
            return JsonResponse({'status': 'error', 'message': 'User already exists'})
        else:
            User.objects.create_user(username=email, password=password)
            return JsonResponse({'status': 'ok'})