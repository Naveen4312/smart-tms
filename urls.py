from django.contrib.auth import views as auth_views
from django.urls import path
from django.contrib.auth.views import LogoutView

urlpatterns = [
    # ...existing patterns...
    path('logout/', LogoutView.as_view(next_page='login'), name='logout'),  # Redirects to login page
    path('login/', YourLoginView.as_view(), name='login')
]

# In your template file (e.g., base.html), you can add the logout link like this:
<a href="{% url 'logout' %}">Logout</a>