import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExploreCompareComponent } from './components/explore-compare.component';

const routes = [ {
    path: '',
    component: ExploreCompareComponent
  }
]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [ExploreCompareComponent],
  exports: [ExploreCompareComponent]
})
export class ExploreCompareModule {}
