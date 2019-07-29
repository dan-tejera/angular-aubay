import { Injectable } from '@angular/core';
import { TITULOS } from '../libros/libros-mock/data';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getAll(clave: string): Array<string> {
    
    if (!clave) { return [] }

    return TITULOS
  }

  //Promesas
  getAllPromise(clave: string): Promise<Array<string>> {
    
    return new Promise ( (resolve, reject) => {
      setTimeout(() => {

        if (!clave) { 
          reject(new Error('Clave no suministrada'))
        }

        else {
          resolve(TITULOS)
        }
        
      }, 2000)
    })
  }

  //Observables
  getAllRx(clave: string) : Observable<Array<string>> {

      // if (!clave) { throw new Error('Clave no suministrada') }

      // return from(TITULOS) // con from devuelve un observable directamente desde un Array
      // Creates an Observable from an Array, an array-like object, a Promise, 
      // an iterable object, or an Observable-like object.
    
    // Para hacer una simulación asincrona hay que hacerlo de esta manera
    return new Observable( observer => {
      setTimeout( () => {
        if (!clave) { 
          observer.error(new Error ('Clave no suministrada')) 
        }
        observer.next(TITULOS)
      }, 2000) 
    })

  }
}
