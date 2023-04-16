from django.db import models

# Create your models here.
class Company(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    city = models.CharField(max_length=50)
    address = models.TextField()

    class Meta:
        verbose_name = 'Company'
        verbose_name_plural = 'Companies'
    
    def __str__(self):
        return f'Company {self.id}: {self.name}'


class Vacancy(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    salary = models.FloatField()
    company = models.ForeignKey(Company, on_delete= models.CASCADE, related_name='company')

    class Meta:
        verbose_name = 'Vacancy'
        verbose_name_plural = 'Vacancies'

    def __str__(self):
        return f'Vacancy {self.id}: {self.name}'





