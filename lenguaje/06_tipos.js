{
    var cadena = void 0;
    var num = void 0;
    var isOK = void 0;
    // cadena = 43; error en TS
}
// Inferencia de tipos:
{
    var cadena = 'Pepe';
    // cadena = 37; error en TS
}
// Arrays
{
    var aDatos = [];
    var aDatos2 = [];
    var aDatos3 = [];
    var aDatos4 = [];
    aDatos.push();
    // Datos3.push('Pepe'); // error en TS
}
// Tipo unión
{
    var codigo = void 0; // código puede ser string o number.
    codigo = 'Hola';
    codigo = 33;
    // codigo = true; // error en TS
}
// Objetos e interfaces
{
    var oDatos = void 0;
    oDatos = { nombre: 'Pepe', edad: 32 };
    var Persona = /** @class */ (function () {
        function Persona(nombre, edad) {
            this.nombre = nombre;
            this.edad = edad;
        }
        return Persona;
    }());
    var oDatos2 = void 0;
}
