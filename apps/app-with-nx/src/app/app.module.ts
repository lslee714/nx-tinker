import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HelloModule } from '@app-with-nx/hello';
import { WorldModule } from '@app-with-nx/world';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HelloModule,
    WorldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
