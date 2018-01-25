import { NgModule } from '@angular/core';
import 'hammerjs';  // necesario para mat-slider, dejarlo en 2do lugar
import { BrowserModule } from '@angular/platform-browser';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
// ---
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';  // <-- #1 import
import { MaterialModule } from '../shared/material.module';
import { HttpClientModule, HttpClientXsrfModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// -- Componentes Locales
import { LoginComponent } from './login/login.component';
import { LoggerService } from './services/logger.service';
import { CrudService } from './services/crud.service';
import { GLOBALS, user } from '../shared/globals';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ResponseComponent } from './response/response.component';


const appRoutes: Routes = [
  { path: 'response', component: ResponseComponent },
  // { path: 'query', component: QueryComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ToolbarComponent,
    ResponseComponent
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
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  entryComponents: [
    LoginComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoggerService, multi: true },
    { provide: GLOBALS, useValue: user },
    CrudService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
