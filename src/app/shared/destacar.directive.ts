import { Directive, ElementRef, Input, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[abyDestacar]'
})
export class DestacarDirective implements OnInit {
 
  @Input() abyDestacar: string;

  constructor( private eTarget: ElementRef ) { 
    
  }

  ngOnInit() {
    //console.log(`Directiva Aplicada ${ this.abyDestacar }`)   
    //this.eTarget.nativeElement.title =  this.abyDestacar
    this.eTarget.nativeElement.setAttribute('title', this.abyDestacar)   
  }

  @HostListener('click') anular() {
    //console.log('Directiva Anulada')
    this.eTarget.nativeElement.setAttribute('title', 'Directiva Anulada')   
  }

}
