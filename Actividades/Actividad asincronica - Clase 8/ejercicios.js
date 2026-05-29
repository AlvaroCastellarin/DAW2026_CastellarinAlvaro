// 1. Variables y operadores

// a
let num1 = 10;
let num2 = 20;
let suma = num1 + num2;
console.log(suma);

// b
let texto1 = "Hola";
let texto2 = "Mundo";
let concatenado = texto1 + " " + texto2;
console.log(concatenado);

// c
let palabra1 = "JavaScript";
let palabra2 = "Ejercicios";
let sumaLargos = palabra1.length + palabra2.length;
console.log(sumaLargos);


// 2. Strings

// a
let cadena = "programacion";
console.log(cadena.toUpperCase());

// b
let texto = "desarrollo";
let primeros5 = texto.substring(0, 5);
console.log(primeros5);

// c
let ultimos3 = texto.substring(texto.length - 3);
console.log(ultimos3);

// d
let palabra = "javascript";
let capitalizada =
  palabra.substring(0, 1).toUpperCase() +
  palabra.substring(1).toLowerCase();

console.log(capitalizada);

// e
let frase = "Hola Mundo";
let posicion = frase.indexOf(" ");
console.log(posicion);

// f
let fraseLarga = "programacion avanzada";
let espacio = fraseLarga.indexOf(" ");

let palabraA =
  fraseLarga.substring(0, 1).toUpperCase() +
  fraseLarga.substring(1, espacio).toLowerCase();

let palabraB =
  fraseLarga.substring(espacio + 1, espacio + 2).toUpperCase() +
  fraseLarga.substring(espacio + 2).toLowerCase();

let resultado = palabraA + " " + palabraB;
console.log(resultado);


// 3. Arrays

let meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
];

// a
console.log(meses[4], meses[10]);

// b
meses.sort();
console.log(meses);

// c
meses.unshift("Inicio");
meses.push("Final");
console.log(meses);

// d
meses.shift();
meses.pop();
console.log(meses);

// e
meses.reverse();
console.log(meses);

// f
let unidos = meses.join(" - ");
console.log(unidos);

// g
let copia = meses.slice(4, 11);
console.log(copia);


// 4. If Else

// a
let random = Math.random();

if (random >= 0.5) {
  alert("Greater than 0,5");
} else {
  alert("Lower than 0,5");
}

// b
let age = 25;

if (age < 2) {
  alert("Bebe");
} else if (age <= 12) {
  alert("Niño");
} else if (age <= 19) {
  alert("Adolescente");
} else if (age <= 30) {
  alert("Joven");
} else if (age <= 60) {
  alert("Adulto");
} else if (age <= 75) {
  alert("Adulto mayor");
} else {
  alert("Anciano");
}


// 5. For

// a
let palabras = ["manzana", "banana", "pera", "uva", "melon"];

for (let i = 0; i < palabras.length; i++) {
  alert(palabras[i]);
}

// b
for (let i = 0; i < palabras.length; i++) {
  let palabraModificada =
    palabras[i].substring(0, 1).toUpperCase() +
    palabras[i].substring(1);

  alert(palabraModificada);
}

// c
let sentence = "";

for (let i = 0; i < palabras.length; i++) {
  sentence += palabras[i] + " ";
}

alert(sentence);

// d
let numeros = [];

for (let i = 0; i < 10; i++) {
  numeros.push(i);
}

console.log(numeros);


// 6. Funciones

// a
function sumaNumeros(a, b) {
  return a + b;
}

let resultadoSuma = sumaNumeros(5, 7);
console.log(resultadoSuma);

// b
function sumaValidada(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    alert("Uno de los parámetros tiene error");
    return NaN;
  }

  return a + b;
}

console.log(sumaValidada(4, 8));

// c
function validateInteger(numero) {
  return Number.isInteger(numero);
}

console.log(validateInteger(10));
console.log(validateInteger(10.5));

// d y e
function convertirEntero(numero) {
  if (!validateInteger(numero)) {
    alert("El número no es entero, será redondeado");
    return Math.round(numero);
  }

  return numero;
}

function sumaFinal(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    alert("Uno de los parámetros tiene error");
    return NaN;
  }

  a = convertirEntero(a);
  b = convertirEntero(b);

  return a + b;
}

console.log(sumaFinal(5.7, 4.2));