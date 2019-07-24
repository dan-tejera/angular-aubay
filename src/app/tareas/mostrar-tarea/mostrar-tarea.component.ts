import { Component, OnInit, Input } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea.model';

@Component({
  selector: 'aby-mostrar-tarea',
  templateUrl: './mostrar-tarea.component.html',
  styleUrls: ['./mostrar-tarea.component.css']
})
export class MostrarTareaComponent implements OnInit {

  @Input() tarea: TareaModel;

  constructor() { 
    
  }

  ngOnInit() {

  }

  saveTareas()
  {

  }

  deleteTarea()
  {

  }

}
