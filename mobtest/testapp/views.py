from rest_framework import viewsets

from testapp.models import ContractorApplication, Contractor
from testapp.serializers import ContractorApplicationSerializer, ContractorSerializer


# from rest_framework.decorators import api_view


# It is up to you whether you want to use class based or functional view(s)


class ContractorApplicationViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows contractor to be viewed or edited.
    """

    queryset = ContractorApplication.objects.all()
    serializer_class = ContractorApplicationSerializer


class ContractorsViewSet(viewsets.ModelViewSet):
    queryset = Contractor.objects.all()
    serializer_class = ContractorSerializer

# @api_view(["GET"])
# def get_contractor_applications(request):
#     pass
