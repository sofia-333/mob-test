# from django.urls import path
from rest_framework import routers
from django.urls import include, path
from testapp.views import ContractorApplicationViewSet

router = routers.DefaultRouter()
router.register(r"contractor-applications", ContractorApplicationViewSet)

urlpatterns = [
    path("", include(router.urls)),
    # if functional view(s) desired
    # path("contractor-applications/", contractor_detail)
]
