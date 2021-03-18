from django.http import HttpResponseRedirect 

from django.shortcuts import render, redirect

from django.urls import reverse

from django.views.generic import ListView

from . import forms



def index (request):
    if request.method == "POST":
        form = forms.FormularioContactos(request.POST)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect(reverse("index"))
    else:
        form = forms.FormularioContactos()   
    ctx = {"form": form}
    return render(request, "home/index.html", ctx)




        

# Create your views here.
