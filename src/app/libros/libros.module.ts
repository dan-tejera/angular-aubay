import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrosRoutingModule } from './libros-routing.module';
import { LibrosComponent } from './libros.component';
import { LibrosMockComponent } from './libros-mock/libros-mock.component';

import { FormsModule } from '@angular/forms';
import { LibrosMockSrvComponent } from './libros-mock-srv/libros-mock-srv.component';

@NgModule({
  declarations: [LibrosComponent, LibrosMockComponent, LibrosMockSrvComponent],
  imports: [
    CommonModule,
    LibrosRoutingModule,
    FormsModule
  ]
})
export class LibrosModule { }
