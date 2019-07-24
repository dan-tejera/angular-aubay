import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TareaModel } from '../../models/tarea.model';

@Component({
  selector: 'aby-nueva-tarea',
  templateUrl: './nueva-tarea.component.html',
  styleUrls: ['./nueva-tarea.component.css']
})
export class NuevaTareaComponent implements OnInit {

  newTarea: TareaModel
  @Output() addTarea: EventEmitter<TareaModel> // Emisor de eventos
  
  constructor() { 
    this.addTarea = new EventEmitter()
  }

  ngOnInit() {
    this.newTarea = new TareaModel()
  }

  onClickAdd() {
    this.addTarea.next(this.newTarea); // Emite un evento 
    this.newTarea = new TareaModel() 
  }

}
