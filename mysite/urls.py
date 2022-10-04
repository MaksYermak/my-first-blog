from django.contrib import admin
from django.contrib.auth import views
from django.urls import include, re_path, path
from rest_framework import routers

from blog import views as blog_views

router = routers.DefaultRouter()
router.register(r'users', blog_views.UserViewSet)
router.register(r'posts', blog_views.PostViewSet)

urlpatterns = [
   path('admin/', admin.site.urls),
   re_path(r'^accounts/login/$', views.LoginView.as_view(), name='login'),
   re_path(r'^accounts/logout/$', views.LogoutView.as_view(next_page='/'), name='logout'),
   re_path(r'', include('blog.urls')),
   path('api/', include(router.urls)),
   path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]
