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

formulario.addEventListener('submit', async function (event) {
  event.preventDefault();

  // TODO:
  // 1) limpiar errores
  // 2) obtener datos
  // 3) validar datos
  // 4) si hay errores, mostrarlos y cortar
  // 5) crear payload
  // 6) enviar con fetch (POST)
  // 7) mostrar respuesta del servidor
});

formulario.addEventListener('reset', function () {
  // TODO:
  // Limpiar errores, estado y respuesta.
});

function obtenerDatosFormulario() {
  // TODO: devolver un objeto con los 6 campos.
  return {};
}

function validarFormulario(datos) {
  // TODO: validar los 6 campos con reglas basicas.
  const errores = {};
  return errores;
}

function crearPayload(datos) {
  // TODO: convertir edad a Number y devolver el payload.
  return {};
}

async function enviarAlServidor(payload) {
  // TODO: usar fetch con method POST, headers JSON y body JSON.stringify(payload).
  // Si response.ok es false, lanzar error.
}

function mostrarErrores(errores) {
  // TODO: mostrar errores en #error-campo y agregar .input-error al control.
}

function limpiarErrores() {
  // TODO: limpiar mensajes y clases de error.
}

function mostrarEstado(mensaje, tipo) {
  // TODO: usar #mensajeEstado y clases success/error.
}

function mostrarRespuestaServidor(data) {
  // TODO: mostrar JSON.stringify(data, null, 2) en #respuestaServidor.
}

function cambiarEstadoBoton(enviando) {
  // TODO: deshabilitar/habilitar boton y cambiar texto a "Enviando...".
}

function esEmailValido(email) {
  // TODO: devolver true/false.
  return false;
}
