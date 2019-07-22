import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aby-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  nombre: string;
  mensaje: string;

  constructor() { }

  ngOnInit() {
    this.nombre = '';
    this.mensaje = 'Dime tu nombre';
  }

  onClickBorrar (evento: Event)
  {
    this.nombre = '';
    // console.log(evento);
  }
}
