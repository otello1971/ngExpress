import { NgModule } from '@angular/core';
import 'hammerjs';  // necesario para mat-slider, dejarlo en 2do lugar
import { BrowserModule } from '@angular/platform-browser';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
// ---
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';  // <-- #1 import
import { MaterialModule } from '../shared/material.module';
import { HttpClientModule, HttpClientXsrfModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { HttpXsrfInterceptor } from './services/http.xsrf.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'xsrf_token',
      headerName: 'x_xsrf_token',  // Express doesn't manage uppercase headers
    }),
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    LoginComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpXsrfInterceptor, multi: true }
  //   AuthService,
  //   {provide: HTTP_INTERCEPTORS,
  //    useClass: JwtAuthService,
  //    multi: true,
  // },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
