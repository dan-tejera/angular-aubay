// Clases en Typescript //
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona = /** @class */ (function () {
    function Persona(nombre) {
        if (nombre === void 0) { nombre = ''; }
        this.nombre = nombre;
    }
    Persona.prototype.saludar = function (otro) {
        if (otro === void 0) { otro = 'amigo'; }
        console.log("Hola " + otro + ", soy " + this.nombre);
    };
    Persona.pensar = function () {
        console.log('Pensando otra vez...');
    };
    return Persona;
}());
var p1 = new Persona('Pepe');
p1.saludar('Juan');
var p2 = new Persona('Elena');
p2.saludar(p1.nombre);
// Herencia en ES6 //
var Alumno = /** @class */ (function (_super) {
    __extends(Alumno, _super);
    function Alumno(nombre, curso) {
        if (nombre === void 0) { nombre = ''; }
        if (curso === void 0) { curso = ''; }
        var _this = _super.call(this, nombre) || this;
        _this.curso = curso;
        return _this;
    }
    Alumno.prototype.saludar = function () {
        _super.prototype.saludar.call(this);
        console.log("y estudio " + this.curso + " ");
    };
    return Alumno;
}(Persona));
var a1 = new Alumno('Peter', 'Angular');
a1.edad = 32;
a1.saludar();
//a1.pensar();
console.log(a1);
