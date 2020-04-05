import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router'
import { Observable, EMPTY } from 'rxjs';

@Injectable({providedIn: 'root'})
export class OptInPreloadStrategy implements PreloadingStrategy {

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if(route?.data?.preload) {
      return load();
    }
    else {
      return EMPTY;
    }
  }
}
