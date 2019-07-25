import { Component, OnInit } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea.model';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'aby-lista-simple',
  templateUrl: './lista-simple.component.html',
  styleUrls: ['./lista-simple.component.css']
})
export class ListaSimpleComponent implements OnInit {

  aTareas: Array<TareaModel>
  newTarea: TareaModel
  isEditable: boolean = false;

  constructor(public storageService: StorageService) { }

  ngOnInit() {

    if (localStorage.getItem('tareas')) {
      this.aTareas =  JSON.parse(localStorage.getItem('tareas'))
      //this.storageService.getArray('tareas')
    }
    else {
      this.aTareas = []
    } 

    this.newTarea = new TareaModel()
  }

  addTarea(){ 

    this.aTareas.push(this.newTarea)
    this.newTarea = new TareaModel()
    this.saveTareas();
    //console.log(this.aTareas)
  }

  deleteTarea(numTarea: number){

    this.aTareas.splice(numTarea, 1)
    this.saveTareas();

  }

  deleteAllTareas(){
    // this.aTareas = []
    // localStorage.removeItem('tareas')

    this.storageService.removeArray('tareas');
  }

  saveTareas(){
    //localStorage.setItem('tareas', JSON.stringify(this.aTareas))
    this.storageService.setArray('tareas', this.aTareas);
  }

}
