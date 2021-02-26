import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListModule } from '@aziz-abduraimov/test-lib';
import { BorderModule } from '@aziz-abduraimov/test-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListModule,
    BorderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
