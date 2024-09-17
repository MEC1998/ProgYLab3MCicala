//Ejercicio 3
let cadena: string="Hola, mi nombre es Pepe";
let numero: number=27;
let booleano: boolean=true;
let fecha: Date=new Date();

function mostrarValores(){
    (document.getElementById("texto") as HTMLElement).innerText=`String: ${cadena}`;
    (document.getElementById("numero") as HTMLElement).innerText=`Number: ${numero}`;
    (document.getElementById("booleano") as HTMLElement).innerText=`Boolean: ${booleano}`;
    (document.getElementById("fecha") as HTMLElement).innerText=`Date: ${fecha.toDateString()}`;
}

mostrarValores();

//Ejercicio 4
function convertirNumeroACadena(numero: number): string {
    return numero.toString();
}

let num: number = 428;

let numeroComoTexto: string = convertirNumeroACadena(num);

function mostrarResultado() {
    (document.getElementById("resultado") as HTMLElement).innerText = `Número convertido a cadena: ${numeroComoTexto}`;
}

mostrarResultado();

//Ejercicio 5
function sumarArray(numeros: number[]): number {
    let suma: number = 0;
    for (let numero of numeros) {
        suma += numero;
    }
    return suma;
}

let array: number[] = [5, 10, 15, 20, 25];

let resultadoSuma: number = sumarArray(array);

function mostrarSuma() {
    (document.getElementById("resultadoSuma") as HTMLElement).innerText = `La suma de los elementos del array es: ${resultadoSuma}`;
}

mostrarSuma();

//Ejercicio 6
interface Estudiante {
    nombre: string;
    edad: number;
    curso: string;
}

const estudiante: Estudiante = {
    nombre: "Pepe Botellas",
    edad: 27,
    curso: "Comisión 4"
};

function mostrarEstudiante() {
    const nombreElement = document.getElementById("nombre") as HTMLElement;
    const edadElement = document.getElementById("edad") as HTMLElement;
    const cursoElement = document.getElementById("curso") as HTMLElement;

    if (nombreElement && edadElement && cursoElement) {
        nombreElement.innerText = `Nombre: ${estudiante.nombre}`;
        edadElement.innerText = `Edad: ${estudiante.edad}`;
        cursoElement.innerText = `Curso: ${estudiante.curso}`;
    }
}

mostrarEstudiante();

//Ejercicio 7
type Direccion = {
    calle: string;
    ciudad: string;
    codigoPostal: string;
};

const direccion: Direccion = {
    calle: "Calle Wallaby",
    ciudad: "Sidney",
    codigoPostal: "42"
};

function mostrarDireccion() {
    const calleElement = document.getElementById("calle") as HTMLElement;
    const ciudadElement = document.getElementById("ciudad") as HTMLElement;
    const codigoPostalElement = document.getElementById("codigoPostal") as HTMLElement;

    if (calleElement && ciudadElement && codigoPostalElement) {
        calleElement.innerText = `Calle: ${direccion.calle}`;
        ciudadElement.innerText = `Ciudad: ${direccion.ciudad}`;
        codigoPostalElement.innerText = `Código Postal: ${direccion.codigoPostal}`;
    }
}

mostrarDireccion();

//Ejercicio 8
interface Usuario {
    nombre: string;
    correo: string;
    saludar(): string;
}

const usuario: Usuario = {
    nombre: "Pepe",
    correo: "pepe@botellas.com",
    saludar: function() {
        return `Hola, soy ${this.nombre} y mi correo es ${this.correo}.`;
    }
};

function mostrarSaludo() {
    const saludoElement = document.getElementById("saludo") as HTMLElement;

    if (saludoElement) {
        saludoElement.innerText = usuario.saludar();
    }
}

mostrarSaludo();

//Ejercicio 9
class Persona {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    presentarse(): string {
        return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`;
    }
}

const persona = new Persona("Pepe", 33);

function mostrarPresentacion() {
    const presentacionElement = document.getElementById("presentacion") as HTMLElement;

    if (presentacionElement) {
        presentacionElement.innerText = persona.presentarse();
    }
}

mostrarPresentacion();

//Ejercicio 10
class Caja<T> {
    private valor: T;

    constructor(valor: T) {
        this.valor = valor;
    }

    obtenerValor(): T {
        return this.valor;
    }
}

const cajaString = new Caja<string>("Este es un valor de tipo string");

const cajaNumero = new Caja<number>(99765);


function mostrarValoresCaja() {
    const valorStringElement = document.getElementById("valorString") as HTMLElement;
    const valorNumeroElement = document.getElementById("valorNumero") as HTMLElement;

    if (valorStringElement && valorNumeroElement) {
        valorStringElement.innerText = `Valor almacenado en la caja de tipo string: ${cajaString.obtenerValor()}`;
        valorNumeroElement.innerText = `Valor almacenado en la caja de tipo number: ${cajaNumero.obtenerValor()}`;
    }
}

mostrarValoresCaja();

//Ejercicio 11
function identidad<T>(valor: T): T {
    return valor;
}

const valorDelString = identidad<string>("Hola, soy yo, Pepe");
const valorDelNumero = identidad<number>(33);
const valorDelBooleano = identidad<boolean>(true);

function mostrarValoresIdentidad() {
    const valorStringElement = document.getElementById("valorDelString") as HTMLElement;
    const valorNumeroElement = document.getElementById("valorDelNumero") as HTMLElement;
    const valorBooleanoElement = document.getElementById("valorDelBooleano") as HTMLElement;

    if (valorStringElement && valorNumeroElement && valorBooleanoElement) {
        valorStringElement.innerText = `Valor string: ${valorDelString}`;
        valorNumeroElement.innerText = `Valor number: ${valorDelNumero}`;
        valorBooleanoElement.innerText = `Valor booleano: ${valorDelBooleano}`;
    }
}

mostrarValoresIdentidad();

//Ejercicio 12
enum Color {
    Celeste = 'Celeste',
    Naranja = 'Naranja',
    Violeta = 'Violeta'
}

const colorFavorito: Color = Color.Violeta;

function mostrarColorFavorito() {
    const colorFavoritoElement = document.getElementById("colorFavorito");
    if (colorFavoritoElement) {
        colorFavoritoElement.innerText = `Mi color favorito es: ${colorFavorito}`;
    }
}

mostrarColorFavorito();