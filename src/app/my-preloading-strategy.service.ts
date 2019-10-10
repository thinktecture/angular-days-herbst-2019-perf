import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyPreloadingStrategyService implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    console.log(route);
    return fn();
  }
}
