import { Component } from '@angular/core';

import { OnDemandPreloadingService } from '../routing/strategies/on-demand-preload.service';

@Component({
  selector: 'explore-lib',
  templateUrl: './explore.component.html'
})
export class ExploreComponent {
  constructor(private preloadService: OnDemandPreloadingService){}

  onLinkMouseOver(link: string) {
    this.preloadService.startPreload(link);
  }
}
