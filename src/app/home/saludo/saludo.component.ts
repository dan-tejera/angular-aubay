import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aby-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  nombre: string;
  mensaje: string;
  frase: string;

  constructor() { }

  ngOnInit() {
    this.nombre = '';
    this.mensaje = 'Dime tu nombre';
    this.frase = 'Ejemplo de frase larga para probar nuestro pipe';
  }

  onClickBorrar (evento: Event)
  {
    this.nombre = '';
    // console.log(evento);
  }
}
