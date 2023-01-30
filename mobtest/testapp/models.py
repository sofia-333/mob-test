from django.contrib.auth.models import User
from django.db import models


class Contractor(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone = models.CharField(max_length=25)
    nationality = models.CharField(max_length=25)
    comment = models.TextField(max_length=100, null=True, blank=True)
    pay_rate = models.DecimalField(decimal_places=2, max_digits=10)


class ContractorApplication(models.Model):
    contractor = models.ForeignKey(to=Contractor, on_delete=models.PROTECT, related_name='applications')
    job_name = models.CharField(max_length=25)
    start_date = models.DateField()
    end_date = models.DateField()

