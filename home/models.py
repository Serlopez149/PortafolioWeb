from django.db import models
from django.db.models.fields import CharField


class Contactos(models.Model):
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    telefono = models.IntegerField()
    INTERES = (
        (1, "Desarrollo web"),
        (2, "Analista de Datos"),
        (3, "Finanzas personales")
    )
    intereses = models.PositiveSmallIntegerField(choices=INTERES, null=True)
    descripcion = models.CharField(max_length=1000)


# Create your models here.
