import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './paginas/login/login.component';
import { APP_ROUTES } from './app.routes';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule  } from '@angular/common/http';
import { PaginaComponent } from './paginas/pagina/pagina.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PaginaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    HttpClientModule
  ],
  providers: [ ],
  bootstrap: [AppComponent],

})
export class AppModule { }
