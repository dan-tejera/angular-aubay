import { Injectable, ɵSWITCH_VIEW_CONTAINER_REF_FACTORY__POST_R3__ } from '@angular/core';
import { getLocaleCurrencyName } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {}

    getArray(key: string) {
      return JSON.parse(localStorage.getItem(key)) 
    }

    setArray(key: string, aData: Array<any>) {
      localStorage.setItem(key, 
        JSON.stringify(aData))
    } 

    removeArray(key: string) {
      localStorage.removeItem(key)
    }
}