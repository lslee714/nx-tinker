import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExploreDatasetComponent } from './components/explore-dataset.component';

const routes = [
  {
    path: '',
    component: ExploreDatasetComponent
  }
]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [ExploreDatasetComponent],
  exports: [ExploreDatasetComponent]
})
export class ExploreDatasetModule {}
