import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OptInPreloadStrategy } from './strategies/opt-in-preload-strategy';

const routes = [
  {
    path: 'dataset',
    loadChildren: () => import('../../../dataset/src/lib/explore-dataset.module').then(m => m.ExploreDatasetModule),
    data: { preload: false }
  },
  {
    path: 'compare',
    loadChildren: () => import('../../../compare/src/lib/explore-compare.module').then(m => m.ExploreCompareModule)
  }
]

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: OptInPreloadStrategy})
  ],
  exports: [RouterModule],
  providers: []
})
export class ExploreRouterModule { }
