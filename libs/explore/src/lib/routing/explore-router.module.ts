import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { OptInPreloadStrategy } from './strategies/opt-in-preload-strategy';
import { OnDemandPreloadStrategy } from './strategies/on-demand-preload-strategy';

const routes = [
  {
    path: 'dataset',
    loadChildren: () => import('../../../dataset/src/lib/explore-dataset.module').then(m => m.ExploreDatasetModule),
    data: { preload: true }
  },
  {
    path: 'compare',
    loadChildren: () => import('../../../compare/src/lib/explore-compare.module').then(m => m.ExploreCompareModule),
    data: { preload: true }
  }
]

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: OnDemandPreloadStrategy})
  ],
  exports: [RouterModule],
  providers: []
})
export class ExploreRouterModule { }
