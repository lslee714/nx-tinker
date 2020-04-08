import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'


export class OnDemandPreloadOptions {
  constructor(public routePath: string, public preload = true) {}
}

@Injectable({providedIn: 'root'})
export class OnDemandPreloadingService {
    private demandSubject = new Subject<OnDemandPreloadOptions>();
    demand$ = this.demandSubject.asObservable();;

    startPreload(routePath: string) {
      const message = new OnDemandPreloadOptions(routePath, true);
      this.demandSubject.next(message);
    }
}
