from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required, user_passes_test
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.core.mail import EmailMessage
from .models import Project, PageView
from .forms import ProjectForm

#Logic for Home view
def home(request):
    # Update page view count
    page_view, created = PageView.objects.get_or_create(id=1)
    page_view.count += 1
    page_view.save()
    
    projects = Project.objects.all()

    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')
        
        # Construct email
        subject = "New Contact Form Submission"
        body = f"Name: {name}\nEmail: {email}\nMessage: {message}"
        to_email = "Your Gmail address"

        # Send email
        email_message = EmailMessage(subject, body, to=[to_email])
        email_message.send()

        messages.success(request,'Message sent successfully!')
        return redirect('home')

    return render(request, 'page/home.html', {'projects': projects})

#To check if user is superuser
def superuser_check(user):
    return user.is_superuser

#Logic for Login to admin_dash
def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        
        if user is not None and user.is_superuser:
            login(request, user)
            messages.success(request, 'Successfully logged in!')
            return redirect('admin_dashboard')
        else:
            messages.error(request, 'Invalid credentials or insufficient permissions.')
    
    return render(request, 'admin/login.html')

def logout_view(request):
    logout(request)
    messages.info(request, 'Successfully logged out!')
    return redirect('login')

#Logic for Admin_daash
@login_required
@user_passes_test(superuser_check)
def admin_dashboard(request):
    projects = Project.objects.all()
    page_views = PageView.objects.first()
    
    if request.method == 'POST':
        form = ProjectForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            messages.success(request, 'Project added successfully!')
            return redirect('admin_dashboard')
    else:
        form = ProjectForm()
    
    context = {
        'projects': projects,
        'form': form,
        'page_views': page_views
    }
    return render(request, 'admin/admin_dash.html', context)

#Logic for editing Project
@login_required
@user_passes_test(superuser_check)
def edit_project(request, pk):
    project = get_object_or_404(Project, pk=pk)
    
    if request.method == 'POST':
        form = ProjectForm(request.POST, request.FILES, instance=project)
        if form.is_valid():
            form.save()
            messages.success(request, 'Project updated successfully!')
            return redirect('admin_dashboard')
    else:
        form = ProjectForm(instance=project)
    
    return render(request, 'admin/edit_project.html',{'form': form, 'project': project})

#To delete project
@login_required
@user_passes_test(superuser_check)
def delete_project(request, pk):
    project = get_object_or_404(Project, pk=pk)
    project.delete()
    messages.success(request, 'Project deleted successfully!')
    return redirect('admin_dashboard')