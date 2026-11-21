from django.shortcuts import render

def inicio(request):
 return render(request,'portafolio/inicio.html',{'titulo':'Inicio','saludo':'¡Hola! Soy Erick.'})
def sobre_mi(request):
 return render(request,'portafolio/sobre_mi.html',{'titulo':'Sobre mí','universidad':'Universidad del Valle de Guatemala (UVG)'})
def habilidades(request):
 return render(request,'portafolio/habilidades.html',{'titulo':'Habilidades','nivel':'Principiante'})
def proyectos(request):
 return render(request,'portafolio/proyectos.html',{'titulo':'Proyectos','cantidad':3})
def contacto(request):
 return render(request,'portafolio/contacto.html',{'titulo':'Contacto','correo':'adoniasroquel006@gmail.com'})
def error_404(request,exception):
 return render(request,'portafolio/404.html',{'titulo':'Página no encontrada'},status=404)
