import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloLibraryComponent } from './hello.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HelloLibraryComponent],
  exports: [HelloLibraryComponent]
})
export class HelloModule {}
