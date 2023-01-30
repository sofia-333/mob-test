from rest_framework import serializers

from mobtest.serializers import UserSerializer
from testapp.models import Contractor, ContractorApplication


class ContractorSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Contractor
        fields = ('user', 'phone', 'nationality', 'comment', 'pay_rate')


class ContractorApplicationSerializer(serializers.ModelSerializer):
    contractor = ContractorSerializer()

    class Meta:
        model = ContractorApplication
        fields = ('contractor', 'job_name', 'start_date', 'end_date')
