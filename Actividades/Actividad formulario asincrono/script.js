'use strict';

/*
============================================================
ACTIVIDAD SIMPLE - JavaScript Async + Cliente/Servidor
============================================================

Objetivo:
Validar un formulario de 6 campos y enviar el payload al backend con fetch.

Campos a validar:
1) alumno: obligatorio, minimo 3 caracteres.
2) nombreCompleto: obligatorio, minimo 3 caracteres.
3) email: obligatorio, formato valido.
4) edad: obligatoria, numerica, mayor o igual a 18.
5) suscripcion: obligatoria (Mensual, Trimestral o Anual).
6) aceptaTerminos: obligatorio en true.

Endpoint:
Reemplazar por el endpoint del docente si es necesario.
*/

const ENDPOINT = 'https://endpoints-production-fe35.up.railway.app/suscripciones';
const formulario = document.querySelector('#subscriptionForm');
const botonEnviar = document.querySelector('#btnEnviar');
const mensajeEstado = document.querySelector('#mensajeEstado');
const respuestaServidor = document.querySelector('#respuestaServidor');

formulario.addEventListener('submit', async function (event) {a
  event.preventDefault();
// 1) Limpiar errores de intentos anteriores
  limpiarErrores();
  mostrarEstado('Procesando datos...', '');
  respuestaServidor.textContent = '{}';

  // 2) Obtener datos (la función que creamos con los 6 campos)
  const datos = obtenerDatosFormulario();

  // 3) Validar datos (la función de los 'if' que nos devuelve el diccionario de errores)
  const errores = validarFormulario(datos);

  // 4) Si hay errores, mostrarlos y cortar la ejecución
  if (Object.keys(errores).length > 0) {
    mostrarErrores(errores);
    mostrarEstado('Por favor, corregí los errores en el formulario.', 'error');
    return; // El 'return' frena la función acá y no sigue para abajo
  }

  // 5) Crear payload (la función que convierte la edad a Number)
  const payload = crearPayload(datos);

  // 6) Enviar con fetch (POST) dentro de un bloque try-catch para atrapar problemas de red
  try {
    cambiarEstadoBoton(true); // Deshabilitamos el botón (se pone en "Enviando...")
    mostrarEstado('Enviando suscripción al servidor...', '');

    const respuestaData = await enviarAlServidor(payload);

    // 7) Mostrar respuesta del servidor en caso de éxito
    mostrarEstado('¡Suscripción enviada con éxito!', 'success');
    mostrarRespuestaServidor(respuestaData);
    formulario.reset();

  } catch (error) {
    mostrarEstado(error.message, 'error');
  } finally {
    cambiarEstadoBoton(false);
  }
});

formulario.addEventListener('reset', function () {
limpiarErrores();
  mostrarEstado('Todavía no se envió ningún formulario.', '');
  respuestaServidor.textContent = '{}';
});

function obtenerDatosFormulario() {
  return {
    alumno: document.querySelector('#alumno').value,
    nombreCompleto: document.querySelector('#nombreCompleto').value,
    email: document.querySelector('#email').value,
    edad: document.querySelector('#edad').value,
    suscripcion: document.querySelector('#suscripcion').value,
    aceptaTerminos: document.querySelector('#aceptaTerminos').checked 
  };
}

function validarFormulario(datos) {
  // TODO: validar los 6 campos con reglas basicas.
  const errores = {};
  if (!datos.alumno) { 
    errores.alumno = 'El nombre del alumno es obligatorio.';
  } else if (datos.alumno.length < 3) {
    errores.alumno = 'Debe tener al menos 3 caracteres.';
  }


  if (!datos.nombreCompleto){
    errores.alumno = 'El nombre completo no debe estar vacio'
  }
  if (datos.nombreCompleto.length < 3){
    errores.alumno = 'El minimo de caracteres para el nombre completo es 3'
  }

  if (!datos.email) {
    errores.email = 'El correo electrónico es obligatorio.';
  } else if (!esEmailValido(datos.email)) { 
    errores.email = 'El formato del correo electrónico no es válido.';
  }


  if (!datos.edad) {
    errores.edad = 'La edad es obligatoria.';
  } else if (isNaN(datos.edad) || Number(datos.edad) < 18) {
    errores.edad = 'Debes ser mayor de 18 años.';
  }

  if (!datos.suscripcion) {
    errores.suscripcion = 'Debes seleccionar un tipo de suscripción.';
  }

  if (!datos.aceptaTerminos) {
    errores.aceptaTerminos = 'Debes aceptar los términos y condiciones.';
  }

  return errores;
}

function crearPayload(datos) {
  return {
    alumno: datos.alumno,
    nombreCompleto: datos.nombreCompleto,
    email: datos.email,
    edad: Number(datos.edad),
    suscripcion: datos.suscripcion,
    aceptaTerminos: datos.aceptaTerminos
  };
}

async function enviarAlServidor(payload) {
const respuesta = await fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!respuesta.ok) {
    throw new Error('No se pudo guardar la suscripción en el servidor.');
  }

  return await respuesta.json();
}

function mostrarErrores(errores) {
  for (const campo in errores) {
    const elementoError = document.querySelector(`#error-${campo}`);
    const elementoInput = document.querySelector(`#${campo}`);

    if (elementoError && elementoInput) {
      elementoError.textContent = errores[campo];
      elementoInput.classList.add('input-error');
    }
  }
}

function limpiarErrores() {
  const mensajesError = document.querySelectorAll('.error-message');
  mensajesError.forEach(msg => msg.textContent = '');
  const inputsConError = document.querySelectorAll('.input-error');
  inputsConError.forEach(input => input.classList.remove('input-error'));
}

function mostrarEstado(mensaje, tipo) {
  mensajeEstado.textContent = mensaje;
  mensajeEstado.className = 'status-message';

  if (tipo === 'success') {
    mensajeEstado.classList.add('success');
  } else if (tipo === 'error') {
    mensajeEstado.classList.add('error');
  }
}

function mostrarRespuestaServidor(data) {
  respuestaServidor.textContent = JSON.stringify(data, null, 2);
}

function cambiarEstadoBoton(enviando) {
if (enviando) {
    botonEnviar.disabled = true;
    botonEnviar.textContent = 'Enviando...';
  } else {
    botonEnviar.disabled = false;
    botonEnviar.textContent = 'Enviar suscripción';
  }
}

function esEmailValido(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
  return false;
}
