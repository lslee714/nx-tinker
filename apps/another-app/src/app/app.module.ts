import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { UnrelatedModule } from '@app-with-nx/unrelated';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    UnrelatedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
