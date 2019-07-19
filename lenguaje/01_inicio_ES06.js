'use strict'

// ES6+ (ES2015) incorpora let y const como palabras reservadas.

let x = 1;
console.log(x);

const k = 3;
//k = 4 da error

const aDatos = [1, 2, 3];

aDatos.push(4); // no da error, lo que no deja es modificar los valores iniciales del array
console.log(aDatos);

//algo();

// let algo = function ()
const algo = function ()
{
    let x = 2;
    console.log(x);

    if ( x === 2 ){
        let x = 3;
        console.log(x);
    }
}

algo();

let cadena = 'Hola Pepe';
let cadenaMala = "Hola Pepe"; // Mala práctica

// ES6 incorpora los template strings: ``

let template = `Tengo una variable que dice: ${ cadena }`;

console.log(template);


// Funciones: 


function suma1 (a, b){

    return a + b;
}
const suma2 = function (a, b) { return a + b }

// Valores por defecto:

function suma3 (a = 0, b = 0){

    return a + b;
}

console.log('Funcion Suma3: ' + suma3());

// Arrow functions: /////////////////

const sumaArrow = (a, b) => { return a + b }
const sumaArrow2 = (a, b) => { a + b }
const cuadrado = a => a*a;

// No se declaran, se asignan.
// No pueden ser constructoras.
// This es SIEMPRE la función.

const verThis = function () {
    console.log('Ver This:');
    console.log(this);
}

verThis();

const o = {
    nombre: 'Pepe',
    metodo: verThis
}

o.metodo();

// setTimeout( () => {
//     o.metodo()
// }, 1000);

const arrow = () => {
    console.log('Ver This Arrow:');
    console.log(this);
}

arrow();

const o2 = {
    nombre: 'Juan',
    metodo: arrow
}

o2.metodo();

o2.metodoAsync = function (){
    console.log(this.nombre);
    setTimeout( () => (console.log(this.nombre)), 1000 )
}

o2.metodoAsync();

// Operadores speed / rest:

const verArray = (a, ...rest) => {
    console.log(rest);
}

verArray(1, 3, 4, 6);

const verNumeros = (a, b, c) => {
    console.log('Ver Numeros: ' + a, b, c);
}

const aMasDatos = [2, 6, 9];

verNumeros(...aMasDatos);

// Nuevo bucle For en ES6:

let s =  0;
for (const item of aMasDatos) {
    s += item;
}
console.log('Acumulador1: ' + s);

let s2 = 0;
aMasDatos.forEach(element => s2 += element)
console.log('Acumulador2: ' + s2);

let s3 = aMasDatos.reduce( (a, b) => a + b );
console.log('Acumulador3: ' + s3);
