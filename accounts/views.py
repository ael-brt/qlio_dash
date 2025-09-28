from django.shortcuts import render, redirect
from django.contrib.auth import login
from .forms import SignUpForm

def signup(request):
    if request.method == "POST":
        form = SignUpForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)  # connexion auto après inscription
            return redirect("dashboard:index")
    else:
        form = SignUpForm()
    return render(request, "registration/signup.html", {"form": form})
