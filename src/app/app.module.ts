import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './paginas/login/login.component';
import { APP_ROUTES } from './app.routes';
import { HttpClientModule  } from '@angular/common/http';
import { PaginaComponent } from './paginas/pagina/pagina.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {GoogleMapsModule} from '@angular/google-maps';
import { GoogleMapsComponent } from './components/google-maps/google-maps.component';
import {MatIconModule} from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  PaginaComponent,
  GoogleMapsComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    MatGridListModule,
    GoogleMapsModule,
    MatIconModule,
    BrowserAnimationsModule

  ],
  providers: [ ],
  bootstrap: [AppComponent],

})
export class AppModule { }
