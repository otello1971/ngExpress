import { NgModule } from '@angular/core';
import 'hammerjs';  // necesario para mat-slider, dejarlo en 2do lugar
import { BrowserModule } from '@angular/platform-browser';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
// ---
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';  // <-- #1 import
import { MaterialModule } from '../shared/material.module';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';

import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientXsrfModule
    // .withOptions({
    //   cookieName: 'My-Xsrf-Cookie',
    //   headerName: 'My-Xsrf-Header',
    // })
    ,
  ],
  entryComponents: [
    LoginComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
