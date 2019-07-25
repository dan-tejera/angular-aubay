import { DestacarDirective } from './destacar.directive';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, ElementRef } from '@angular/core'
import { By } from '@angular/platform-browser';


@Component({
  template: '<p id="test">Destacar</p>'
})

class TestComponent {}

//let component: TestComponent;
let fixture: ComponentFixture<TestComponent>;
let elem: ElementRef;

describe('DestacarDirective', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        TestComponent,
        DestacarDirective
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    //component = fixture.componentInstance;
    fixture.detectChanges();
    elem = fixture.debugElement.query(By.css('#test'))
  });


  it('should create an instance', () => {
    const directive = new DestacarDirective(elem); 
    expect(directive).toBeTruthy();
  });
});
