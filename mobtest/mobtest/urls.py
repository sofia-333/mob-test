from django.urls import include, path
from mobtest.views import GroupViewSet, UserViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r"users", UserViewSet)
router.register(r"groups", GroupViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path("api-auth/", include("rest_framework.urls", namespace="rest_framework")),
    path("api/testapp/", include("testapp.urls")),
]
