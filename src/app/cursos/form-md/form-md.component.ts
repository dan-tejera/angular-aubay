import { Component, OnInit } from '@angular/core';
import { ICurso, ITurno, AlumnoModel } from 'src/app/models/alumno.model';
import { CURSOS, TURNOS } from 'src/app/models/datos';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'aby-form-md',
  templateUrl: './form-md.component.html',
  styleUrls: ['./form-md.component.css']
})
export class FormMdComponent implements OnInit {

  cursos: Array<ICurso>
  turnos: Array<ITurno>
  formAlumno: FormGroup
  alumno: AlumnoModel;
  
  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.cursos = CURSOS;
    this.turnos = TURNOS;

    this.formAlumno = this.formBuilder.group({
      nombre: ['', Validators.required], 
      apellidos: ['', Validators.required], 
      dni: [], 
      email: ['@aubay.es', [ Validators.required, Validators.email] ], 
      nacim: [], 
      coment: [], 
      isOk: ['', Validators.required], 
      turno: ['', Validators.required], 
      curso: ['', Validators.required], 
    })

    console.log(this.formAlumno)
  }

  onSubmit(ev) {
    //ev.preventDefault()
    this.alumno = this.formAlumno.value;
    console.log(this.alumno);
  }

}