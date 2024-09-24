from django.shortcuts import render
from .models import PortfolioItem
# Create your views here.
def home(request):
    return render(request, 'home.html')

def about(request):
    return render(request, 'about.html')

def projects(request):
    portfolio_items = PortfolioItem.objects.all() 
    return render(request, 'projects.html', {'portfolio_items': portfolio_items})

def contacts(request):
    return render(request, 'contacts.html')
