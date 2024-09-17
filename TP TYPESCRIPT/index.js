"use strict";
//Ejercicio 3
let cadena = "Hola, mi nombre es Pepe";
let numero = 27;
let booleano = true;
let fecha = new Date();
function mostrarValores() {
    document.getElementById("texto").innerText = `String: ${cadena}`;
    document.getElementById("numero").innerText = `Number: ${numero}`;
    document.getElementById("booleano").innerText = `Boolean: ${booleano}`;
    document.getElementById("fecha").innerText = `Date: ${fecha.toDateString()}`;
}
mostrarValores();
//Ejercicio 4
function convertirNumeroACadena(numero) {
    return numero.toString();
}
let num = 428;
let numeroComoTexto = convertirNumeroACadena(num);
function mostrarResultado() {
    document.getElementById("resultado").innerText = `Número convertido a cadena: ${numeroComoTexto}`;
}
mostrarResultado();
//Ejercicio 5
function sumarArray(numeros) {
    let suma = 0;
    for (let numero of numeros) {
        suma += numero;
    }
    return suma;
}
let array = [5, 10, 15, 20, 25];
let resultadoSuma = sumarArray(array);
function mostrarSuma() {
    document.getElementById("resultadoSuma").innerText = `La suma de los elementos del array es: ${resultadoSuma}`;
}
mostrarSuma();
const estudiante = {
    nombre: "Pepe Botellas",
    edad: 27,
    curso: "Comisión 4"
};
function mostrarEstudiante() {
    const nombreElement = document.getElementById("nombre");
    const edadElement = document.getElementById("edad");
    const cursoElement = document.getElementById("curso");
    if (nombreElement && edadElement && cursoElement) {
        nombreElement.innerText = `Nombre: ${estudiante.nombre}`;
        edadElement.innerText = `Edad: ${estudiante.edad}`;
        cursoElement.innerText = `Curso: ${estudiante.curso}`;
    }
}
mostrarEstudiante();
const direccion = {
    calle: "Calle Wallaby",
    ciudad: "Sidney",
    codigoPostal: "42"
};
function mostrarDireccion() {
    const calleElement = document.getElementById("calle");
    const ciudadElement = document.getElementById("ciudad");
    const codigoPostalElement = document.getElementById("codigoPostal");
    if (calleElement && ciudadElement && codigoPostalElement) {
        calleElement.innerText = `Calle: ${direccion.calle}`;
        ciudadElement.innerText = `Ciudad: ${direccion.ciudad}`;
        codigoPostalElement.innerText = `Código Postal: ${direccion.codigoPostal}`;
    }
}
mostrarDireccion();
const usuario = {
    nombre: "Pepe",
    correo: "pepe@botellas.com",
    saludar: function () {
        return `Hola, soy ${this.nombre} y mi correo es ${this.correo}.`;
    }
};
function mostrarSaludo() {
    const saludoElement = document.getElementById("saludo");
    if (saludoElement) {
        saludoElement.innerText = usuario.saludar();
    }
}
mostrarSaludo();
//Ejercicio 9
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    presentarse() {
        return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`;
    }
}
const persona = new Persona("Pepe", 33);
function mostrarPresentacion() {
    const presentacionElement = document.getElementById("presentacion");
    if (presentacionElement) {
        presentacionElement.innerText = persona.presentarse();
    }
}
mostrarPresentacion();
//Ejercicio 10
class Caja {
    constructor(valor) {
        this.valor = valor;
    }
    obtenerValor() {
        return this.valor;
    }
}
const cajaString = new Caja("Este es un valor de tipo string");
const cajaNumero = new Caja(99765);
function mostrarValoresCaja() {
    const valorStringElement = document.getElementById("valorString");
    const valorNumeroElement = document.getElementById("valorNumero");
    if (valorStringElement && valorNumeroElement) {
        valorStringElement.innerText = `Valor almacenado en la caja de tipo string: ${cajaString.obtenerValor()}`;
        valorNumeroElement.innerText = `Valor almacenado en la caja de tipo number: ${cajaNumero.obtenerValor()}`;
    }
}
mostrarValoresCaja();
//Ejercicio 11
function identidad(valor) {
    return valor;
}
const valorDelString = identidad("Hola, soy yo, Pepe");
const valorDelNumero = identidad(33);
const valorDelBooleano = identidad(true);
function mostrarValoresIdentidad() {
    const valorStringElement = document.getElementById("valorDelString");
    const valorNumeroElement = document.getElementById("valorDelNumero");
    const valorBooleanoElement = document.getElementById("valorDelBooleano");
    if (valorStringElement && valorNumeroElement && valorBooleanoElement) {
        valorStringElement.innerText = `Valor string: ${valorDelString}`;
        valorNumeroElement.innerText = `Valor number: ${valorDelNumero}`;
        valorBooleanoElement.innerText = `Valor booleano: ${valorDelBooleano}`;
    }
}
mostrarValoresIdentidad();
//Ejercicio 12
var Color;
(function (Color) {
    Color["Celeste"] = "Celeste";
    Color["Naranja"] = "Naranja";
    Color["Violeta"] = "Violeta";
})(Color || (Color = {}));
const colorFavorito = Color.Violeta;
function mostrarColorFavorito() {
    const colorFavoritoElement = document.getElementById("colorFavorito");
    if (colorFavoritoElement) {
        colorFavoritoElement.innerText = `Mi color favorito es: ${colorFavorito}`;
    }
}
mostrarColorFavorito();
