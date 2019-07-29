import { Component, OnInit } from '@angular/core';
import { TITULOS } from '../libros-mock/data';
import { BooksService } from 'src/app/services/books.service';
import { Observable } from 'rxjs';
import { ElementSchemaRegistry } from '@angular/compiler';

@Component({
  selector: 'aby-libros-mock-srv',
  templateUrl: './libros-mock-srv.component.html',
  styleUrls: ['./libros-mock-srv.component.css']
})
export class LibrosMockSrvComponent implements OnInit {

  aLibros: Array<string>;
  clave: string;
  mensajesError: string;
  aLibros$: Observable<Array<string>>;
 
  constructor(public bookService: BooksService) { }

  ngOnInit() {
    this.aLibros = [];
  }

  onBuscar() {
 
    this.aLibros = this.bookService.getAll(this.clave)
    this.clave = ''
  }

  onBuscarPromise() {
    this.bookService.getAllPromise(this.clave)
    .then (response => this.aLibros = response)
    .catch (error => this.mensajesError = error.message)
  }

  onBuscarRxJS() {
    this.aLibros$ = this.bookService.getAllRx(this.clave)
    this.aLibros$.subscribe(
      response => {this.aLibros = response},      
      error => {this.mensajesError = error.message}
    )}

}
