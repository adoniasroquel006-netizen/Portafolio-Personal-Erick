// 1. Menú móvil
const botonMenu=document.querySelector('#menu-boton');
const menu=document.querySelector('#menu');
if(botonMenu&&menu){botonMenu.addEventListener('click',()=>{const abierto=menu.classList.toggle('abierto');botonMenu.setAttribute('aria-expanded',String(abierto));botonMenu.setAttribute('aria-label',abierto?'Cerrar menú':'Abrir menú');});menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('abierto');botonMenu.setAttribute('aria-expanded','false');}));}
// 2. Filtro de proyectos sin recargar
const filtros=document.querySelectorAll('[data-filtro]');
const tarjetas=document.querySelectorAll('[data-tecnologias]');
filtros.forEach(boton=>boton.addEventListener('click',()=>{const filtro=boton.dataset.filtro;let visibles=0;filtros.forEach(b=>{b.classList.toggle('activo',b===boton);b.setAttribute('aria-pressed',String(b===boton));});tarjetas.forEach(t=>{const mostrar=filtro==='todos'||t.dataset.tecnologias.split(' ').includes(filtro);t.hidden=!mostrar;if(mostrar)visibles++;});const aviso=document.querySelector('#sin-resultados');if(aviso)aviso.hidden=visibles!==0;}));
// 3. Validación local del formulario (no se envía a servidor)
const formulario=document.querySelector('#formulario');
if(formulario){formulario.addEventListener('submit',evento=>{evento.preventDefault();const nombre=document.querySelector('#nombre').value.trim();const correo=document.querySelector('#correo').value.trim();const mensaje=document.querySelector('#mensaje').value.trim();const resultado=document.querySelector('#resultado');resultado.style.color='#a03e2b';if(!nombre||!correo||!mensaje){resultado.textContent='Por favor, completa todos los campos.';return;}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)){resultado.textContent='Revisa el formato de tu correo electrónico.';return;}resultado.style.color='#376b52';resultado.textContent='¡Todo listo! Los datos son válidos. Recuerda que este formulario es solo una demostración y no envía mensajes.';formulario.reset();});}
