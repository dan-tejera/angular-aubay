{
    let cadena: string;
    let num: number;
    let isOK: boolean;

    // cadena = 43; error en TS
}

// Inferencia de tipos:
{
    let cadena = 'Pepe';

    // cadena = 37; error en TS
}

// Arrays
{
    let aDatos: [] = [];
    let aDatos2: Array<any> = [];

    let aDatos3: Array<number> = [];
    let aDatos4: number [] = [];

    aDatos.push();

    // Datos3.push('Pepe'); // error en TS

}

// Tipo unión
{
    let codigo: string | number; // código puede ser string o number.

    codigo = 'Hola';

    codigo = 33;

    // codigo = true; // error en TS
}

// Objetos e interfaces
{
    let oDatos: {
        nombre: string,
        edad: number
    }

    oDatos = {nombre: 'Pepe', edad: 32}

    interface IPersona {
        nombre: string,
        edad: number
    }

    class Persona implements IPersona {
        
        // nombre: string;
        // edad: number;

        // constructor(nombre: string, edad: number) {
        //     this.nombre = nombre;
        //     this.edad = edad;
        // }

        // El código comentado de arriba es igual a esta instrucción
        constructor(public nombre: string, public edad: number) {
            
        }
    }

    let oDatos2: IPersona;

}