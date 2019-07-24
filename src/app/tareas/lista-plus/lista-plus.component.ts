import { Component, OnInit } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea.model';

@Component({
  selector: 'aby-lista-plus',
  templateUrl: './lista-plus.component.html',
  styleUrls: ['./lista-plus.component.css']
})
export class ListaPlusComponent implements OnInit {

  aTareas: Array<TareaModel>

  constructor() { }

  ngOnInit() {
    if (localStorage.getItem('tareasPlus')) {
      this.aTareas =  JSON.parse(localStorage.getItem('tareasPlus'))
    }
    else {
      this.aTareas = []
    }    

  }

  addTarea(newTarea: TareaModel) {
    this.aTareas.push(newTarea)
    this.saveTareas();

  } 

  deleteTarea(numTarea: number){

    this.aTareas.splice(numTarea, 1)
    this.saveTareas();

  }

  deleteAllTareas(){
    this.aTareas = []
    localStorage.removeItem('tareasPlus')
  }

  saveTareas(){
    localStorage.setItem('tareasPlus', JSON.stringify(this.aTareas))
  }
}
