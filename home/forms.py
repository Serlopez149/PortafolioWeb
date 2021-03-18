from django.forms import ModelForm
from .models import Contactos

class FormularioContactos(ModelForm):
    class Meta:
        model = Contactos
        fields = ("nombre", "apellido", "email", "telefono", "intereses", "descripcion")
    