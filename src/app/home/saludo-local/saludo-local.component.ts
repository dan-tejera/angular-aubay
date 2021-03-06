import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'aby-saludo-local',
  templateUrl: './saludo-local.component.html',
  styleUrls: ['./saludo-local.component.css'],
  //encapsulation: ViewEncapsulation.ShadowDom  // Con esta propiedad carga su propio css
  //encapsulation: ViewEncapsulation.None  // Exporta los estilos css de esta clase hasta las de fuera
  encapsulation: ViewEncapsulation.Emulated  // Con esta propiedad carga su propio css manteniendo el estilo general
})
export class SaludoLocalComponent implements OnInit {

  @ViewChild('in_nombre', {static: true}) inNombre: ElementRef;

  constructor() {
   }

  ngOnInit() {

    console.log(this.inNombre.nativeElement);

  }

}
