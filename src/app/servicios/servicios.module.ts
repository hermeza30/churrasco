import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioService } from './usuario.service';
import { LoginGuard } from './login.guard';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[UsuarioService,LoginGuard ]
})
export class ServiciosModule { }
