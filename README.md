# Portafolio personal de Erick — cómo abrirlo

1. Descomprime el ZIP.
2. Abre la carpeta `mi_portafolio` en **Visual Studio Code**.
3. Abre **Terminal > Nueva terminal**.
4. Comprueba que Python está instalado: `python --version` (en Windows también puede ser `py --version`).
5. Crea un entorno virtual: `python -m venv .venv`.
6. En Windows PowerShell actívalo con `.venv\Scripts\Activate.ps1` (si está bloqueado, usa CMD y `.venv\Scripts\activate.bat`). En Mac/Linux: `source .venv/bin/activate`.
7. Instala Django: `python -m pip install -r requirements.txt`.
8. Inicia la web: `python manage.py runserver`.
9. Entra en tu navegador a http://127.0.0.1:8000/
10. Para detener el servidor, presiona **Ctrl + C**.

No se requiere base de datos ni migraciones. Si `python` no funciona en Windows, usa `py` en los comandos correspondientes.

## Carpetas
- `fase_1/`: mapa e inventario.
- `fase_2/`: guía Figma y 12 wireframes SVG importables.
- `mi_portafolio/`: código Django, HTML, CSS, JavaScript e imágenes.
- `entrega/`: checklist y guion para la exposición.

**Pendiente en tus cuentas:** crear el archivo real de Figma, su prototipo y la revisión entre compañeros; publicar GitHub y obtener capturas comparativas. El sitio no envía correos ni utiliza base de datos. Los proyectos son propuestas didácticas, no trabajos ya terminados.

comando para entrar a la terminal : 
cd .\Portafolio_Erick\mi_portafolio
py manage.py runserver
