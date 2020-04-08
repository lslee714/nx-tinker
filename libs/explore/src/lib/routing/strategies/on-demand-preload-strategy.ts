import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router'
import { Observable, EMPTY } from 'rxjs';
import { map } from 'rxjs/operators'

import { OnDemandPreloadingService, OnDemandPreloadOptions } from './on-demand-preload.service';

@Injectable({providedIn: 'root', deps: [OnDemandPreloadingService]})
export class OnDemandPreloadStrategy implements PreloadingStrategy {

  constructor(private preloadOnDemandService: OnDemandPreloadingService){}

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    return this.preloadOnDemandService.demand$.pipe(
      map(preloadOptions  => {
        const shouldPreload = this.shouldPreload(route, preloadOptions)
        return shouldPreload ? load() : EMPTY
      }
    ));
  }

  private shouldPreload(route: Route, preloadOptions: OnDemandPreloadOptions): boolean {
    return (
      route?.data?.preload && [route.path].includes(preloadOptions.routePath) && preloadOptions.preload
    )
  }
}
