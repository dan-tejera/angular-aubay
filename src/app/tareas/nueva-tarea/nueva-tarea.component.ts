import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea.model';

@Component({
  selector: 'aby-nueva-tarea',
  templateUrl: './nueva-tarea.component.html',
  styleUrls: ['./nueva-tarea.component.css']
})
export class NuevaTareaComponent implements OnInit {

  newTarea: TareaModel
  @Output() addTarea: EventEmitter<TareaModel>
  @Output() deleteAllTareas: EventEmitter<null>

  constructor() { 
    this.addTarea = new EventEmitter()
    this.deleteAllTareas = new EventEmitter()
  }

  ngOnInit() {
    this.newTarea = new TareaModel()
  }

  onClickAdd(){
    this.addTarea.next(this.newTarea) //Mas moderno que poner emit, propago la tarea al padre
    this.newTarea = new TareaModel()
  }

  onClickDeleteAll(){
    this.deleteAllTareas.next(null)
  }

}