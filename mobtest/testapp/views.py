from django.contrib.auth.models import User
from mobtest.serializers import UserSerializer
from rest_framework import viewsets

# from rest_framework.decorators import api_view


# It is up to you whether you want to use class based or functional view(s)


class ContractorApplicationViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows contractor to be viewed or edited.
    """

    # TODO left for debugging - change this to Contractor queryset
    queryset = User.objects.all().order_by("-date_joined")
    serializer_class = UserSerializer


# @api_view(["GET"])
# def get_contractor_applications(request):
#     pass
