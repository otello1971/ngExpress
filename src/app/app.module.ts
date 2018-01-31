import { NgModule } from '@angular/core';
import 'hammerjs';  // necesario para mat-slider, dejarlo en 2do lugar
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
// ---
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';  // <-- #1 import
import { HttpClientModule, HttpClientXsrfModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MaterialModule } from '../shared/material.module';

// -- Componentes, Servicios y Módulos Locales
import { LoginComponent } from './login/login.component';
import { LoggerService } from './services/logger.service';
import { CrudService } from './services/crud.service';
import { GLOBALS, user } from '../shared/globals';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ResponseComponent } from './response/response.component';
import { PageNotFoundComponent } from './misc/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { Toolbar2Component } from './toolbar2/toolbar2.component';
import { Toolbar3Component } from './toolbar3/toolbar3.component';

// Cards to show
import { Card1Component } from './toolbar2/card1/card1.component';
import { Card2Component } from './toolbar2/card2/card2.component';
import { Card3Component } from './toolbar2/card3/card3.component';



const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'response', component: ResponseComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ToolbarComponent,
    ResponseComponent,
    PageNotFoundComponent,
    HomeComponent,
    CarouselComponent,
    Toolbar2Component,
    Toolbar3Component,
    Card1Component,
    Card2Component,
    Card3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'xsrf_token',
      headerName: 'x_xsrf_token',  // Express doesn't manage uppercase headers
    }),
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
  ],
  entryComponents: [
    LoginComponent,
  ]
,
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoggerService, multi: true },
    { provide: GLOBALS, useValue: user },
    CrudService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
