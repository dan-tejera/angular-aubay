import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea.model';

@Component({
  selector: 'aby-mostrar-tarea',
  templateUrl: './mostrar-tarea.component.html',
  styleUrls: ['./mostrar-tarea.component.css']
})

export class MostrarTareaComponent implements OnInit {

  @Input() tarea: TareaModel
  @Input() i: number
  @Output() deleteTarea: EventEmitter<number>
  @Output() changeTarea: EventEmitter<object>

  isEditable: boolean

  constructor() { 
    this.deleteTarea = new EventEmitter()
    this.changeTarea = new EventEmitter()
  }

  ngOnInit() {    
    this.isEditable = false;
  }

  onChange() {
    this.changeTarea.next( {i: this.i, tarea: this.tarea })
  }

  onClickDelete(){
    this.deleteTarea.next(this.i)
  }

}