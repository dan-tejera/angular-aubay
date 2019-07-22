import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { HomeComponent } from '../app/home/home.component';
//import { TareasComponent } from '../app/tareas/tareas.component';
//import { UsuariosComponent } from '../app/usuarios/usuarios.component';


const routes: Routes = [
  //{ path: 'home', component: HomeComponent },
  {
    path: 'home', 
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  }, // manera en angular 8
  
  //{ path: 'tareas', component: TareasComponent },
  { path: 'tareas', loadChildren: './tareas/tareas.module#TareasModule' },
  // manera en angular menor a 8
  

  //{ path: 'usuarios', component: UsuariosComponent },
  {
    path: 'usuarios', 
    loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule)
  },    
  
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
