import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'aby-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuario: string;

  constructor(public activatedRoute: ActivatedRoute,
              public router: Router) { }

  ngOnInit() {
    this.usuario = this.activatedRoute.snapshot.params['param']

  }

  onClickIr() {
    this.router.navigate(['/home'])
  }

}
