function course(target) {
    Object.defineProperty(
        target.prototype,
        'course',
        {value:()  => "Angular 2"}
    )
}

@course
class Person {
    firstName;
    lastName;
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }
}

let oPersona = new Person("Pepe","Perez")

console.log(oPersona['course']());  //Angular2

//Notacion objetos
const o = {nombre:'Pepe'}
o.nombre
let propiedad = 'nombre'
o[propiedad]
o['nombre']
