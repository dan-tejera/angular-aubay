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


// Funciones
function suma1 (a, b){

    return a + b;
}
const suma2 = function (a, b) { return a + b }

// Arrow functions
const sumaArrow = (a, b) => { return a + bgit remote add origin }
const sumaArrow2 = (a, b) => { a + b }
const cuadrado = a => a*a;




