import { Component, OnInit } from '@angular/core';
import { TITULOS } from '../libros-mock/data';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'aby-libros-mock-srv',
  templateUrl: './libros-mock-srv.component.html',
  styleUrls: ['./libros-mock-srv.component.css']
})
export class LibrosMockSrvComponent implements OnInit {

  aLibros: Array<string>;
  clave: string;
 
  constructor(public bookService: BooksService) { }

  ngOnInit() {
    this.aLibros = [];
  }

  onBuscar() {
 
    this.aLibros = this.bookService.getAll(this.clave)
    this.clave = ''
  }

}
