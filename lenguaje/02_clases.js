 // Clases en ES5 //
 
 function PersonaES5 (nombre) {
    this.nombre = nombre;
}

PersonaES5.prototype.saludar = function (otro = 'amigo') {
    console.log(`Hola ${ otro }, soy ${ this.nombre }`);
} 

new PersonaES5 ('Pepe').saludar('Juan'); 

PersonaES5.cerebro = true;
PersonaES5.pensar = function () {
    console.log('Pensando...')
}

PersonaES5.pensar();


// Clases en ES6 //

class Persona {
    
    constructor (nombre) {
        this.nombre = nombre;
    }

    saludar (otro = 'amigo') {
        console.log(`Hola ${ otro }, soy ${ this.nombre }`);
    } 
    static pensar () {
        console.log('Pensando otra vez...')
    }    

}
const p1 = new Persona ('Pepe')
p1.saludar('Juan');

const p2 = new Persona ('Elena')
p2.saludar(p1.nombre);

// Herencia en ES6 //

class Alumno extends Persona {
    constructor(nombre = '', curso = '') {
        super(nombre); // Se le pasa al constructor de la clase padre.
        this.curso = curso;
    }
    saludar() {
        super.saludar();
        console.log(`y estudio ${ this.curso } `)
    }
   
}

const a1 = new Alumno('Peter', 'Angular');
a1.edad = 32;
a1.saludar();
//a1.pensar();
console.log(a1);