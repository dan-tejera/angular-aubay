import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { MenuComponent } from '../menu/menu.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let titulo: string = 'Curso Angular Aubay';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        HeaderComponent,
        MenuComponent
       ],
       imports: [
        RouterTestingModule
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance; // Crea objeto HeaderComponent para testing
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it(`should have as title 'Curso Angular Aubay'`, () => {
    expect(component.title).toEqual(titulo);
  });

  it('should render title in a h1 tag', () => {
    const vista = fixture.debugElement.nativeElement;
    expect(vista.querySelector('h1').textContent).toContain(titulo);
  });

});
