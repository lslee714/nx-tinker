import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreComponent } from './components/explore.component';
import { ExploreRouterModule } from './routing/explore-router.module';

@NgModule({
  imports: [CommonModule, ExploreRouterModule],
  declarations: [ExploreComponent],
  exports: [ExploreComponent]
})
export class ExploreModule {}
