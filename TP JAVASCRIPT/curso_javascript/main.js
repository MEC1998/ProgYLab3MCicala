//1- Introducción a JavaScript

//Ejercicio 2:
let a = 4;
let b = 6;
let c = a+b;
console.log("\"a\" vale", a,"\n\"b\" vale", b);
console.log("La suma de \"a\" y \"b\" es igual a", c);

//Ejercicio 3
let nombre = prompt("Ingrese su nombre");
console.log("Hola", nombre, ", bienvenido.");

//2- Operadores lógicos y condicionales

//Ejercicio 1:
let A = 4;
let B = 7;
let C = 8;
console.log("La variable \"A\" vale", A,"\nLa variable \"B\" vale", B,"\nY la variable \"C\" vale", C);
if (A>B && A>C){
  console.log("E mayor de los tres números es:", A);
}else if (B>A && B>C){
  console.log("E mayor de los tres números es:", B);
}else{
  console.log("E mayor de los tres números es:", C);
}

//Ejercicio 2:
let num = 0;
while (num>=0){
  let num = prompt("Ingrese un número positivo");

  if (num<0){
    console.log("Ingrese un número válido");
  }else if (num == 0){
    console.log("El número ingresado es 0");
    break;
  }else{
    if (num%2==0){
      console.log("El número (", num,") es par");
      break;
    }else{
      console.log("El número (", num,") es impar");
      break;
    }
  }
}

//-3 Operadores de asignación y bucles

//Ejercicio 1:
let numero = 10;

while (numero>0){
  console.log(numero);
  numero -= 1;
}

//Ejercicio 2:
let number;

do{
  number = prompt("Ingrese un número mayor a 100");

  if (number<100){
    console.log("¡ERROR! Ingresaste", number,", que es menor a 100");
  }else if (number == 100){
    console.log("Estuviste cerca, ingresá un número MAYOR a 100");
  }else{
    console.log("¡Perfecto! Ingresaste", number, ", que es mayor a 100");
  }
}while(number<=100);

//-4 Funciones de JavaScript

//Ejercicio 1:
let n = Number(prompt("Ingresa un número"));

function esPar(n){
  return n%2 === 0;
}

if (esPar(n)){
  console.log("El número", n, "es par");
}else{
  console.log("El número", n, "es impar");
}

//Ejercicio 2:
let gradoC = Number(prompt("Ingrese la temperatura actual en grados Celsius para convertirla a Fahrenheit"));

function convertirCelsiusAFahrenheit(gradoC){
  return console.log(gradoC, "°C equivalen a", (gradoC*1.8)+32, "°F");
}

convertirCelsiusAFahrenheit(gradoC);


//-5 Objetos en JavaScript

//Ejercicio 1:
let persona = {
  nombre: "Martín",
  edad: 26,
  ciudad: "Mendoza",

  cambiarCiudad: function(nuevaCiudad){
    this.ciudad = nuevaCiudad;
  }
};

console.log(persona);
persona.cambiarCiudad("Salta");
console.log(persona);

//Ejercicio 2:
let libro ={
  titulo: "Viaje a Ixtlán",
  autor: "Carlos Castaneda",
  año: 1972,

  antiguedadLibro: function(año){
    let antiguedad = 2024-this.año;
    if (antiguedad<=10){
      console.log("El libro \"", this.titulo, "\" es reciente");
    }else{
      console.log("El libro \"", this.titulo, "\" es antiguo");
    }
  }
}

libro.antiguedadLibro()

//-6 Arrays

//Ejercicio 1:
let numeros = [1,2,3,4,5,6,7,8,9,10];
let productos = [];

for (let i = 0; i<numeros.length; i++){
  productos[i] = numeros[i]*2;
}

console.log("Números originales:", numeros);
console.log("Números multiplicados por 2:", productos);

//Ejercicio 2:
let pares = [];
let contador = 0;

for (let i = 1; contador < 10; i++){
  if (i%2==0){
    pares[contador]=i;
    contador++;
  }
}

console.log("Primeros 10 números pares:", pares);

//-7 Introducción al DOM

//Ejercicio 1:
const boton = document.getElementById("botonCambiaColor");
const elementos = document.querySelectorAll("p");

boton.addEventListener("click",()=>{
  elementos.forEach(function(elementos){
    elementos.style.color = "blue";
  })
})

//Ejercicio 2:
const botonAlerta = document.getElementById("botonFormulario");
const texto = document.getElementById("texto");

botonAlerta.addEventListener("click", ()=>{
  const valorIngresado = texto.value;
  alert("Has ingresado: "+ valorIngresado);
})

//-8 Eventos en DOM

//Ejercicio 1:
const elementoLista = document.querySelectorAll("li");

elementoLista.forEach((elemento)=>{
  elemento.addEventListener("click",()=>{
    console.log(elemento.textContent);
  })
})

//Ejercicio 2:
const espacioTexto = document.getElementById("espacioTexto");
const botonDeshabilitar = document.getElementById("botonDeshabilitar");
const botonHabilitar = document.getElementById("botonHabilitar");

botonDeshabilitar.addEventListener("click", ()=>{
  espacioTexto.disabled = true;
});

botonHabilitar.addEventListener("click", ()=>{
  espacioTexto.disabled = false;
});

//-9 LocalStorage

//Ejercicio 1:
const formCorreo = document.getElementById("formCorreo");
const inputCorreo = document.getElementById("correo");
const correoGuardado = document.getElementById("correoGuardado");
const eliminarCorreo = document.getElementById("eliminarCorreo");

function mostrarCorreo(){
  const correoAlmacenado = localStorage.getItem("correo");
  if (correoAlmacenado){
    correoGuardado.innerHTML = `<p>Correo guardado: ${correoAlmacenado}</p>`;
    eliminarCorreo.style.display = "inline";
  }
}

mostrarCorreo();

formCorreo.addEventListener("submit", function(event){
  event.preventDefault();

  const correo = inputCorreo.value;
  localStorage.setItem("correo", correo);
  mostrarCorreo();
  formCorreo.reset();
});

eliminarCorreo.addEventListener("click", function(){
  localStorage.removeItem("correo");
  correoGuardado.innerHTML = "";
  eliminarCorreo.style.display = "none";
});