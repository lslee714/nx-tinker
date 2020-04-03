import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnrelatedLibComponent } from './unrelated.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UnrelatedLibComponent],
  exports: [UnrelatedLibComponent]
})
export class UnrelatedModule {}
