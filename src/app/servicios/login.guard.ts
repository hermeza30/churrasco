import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
    constructor(public _usuarioService:UsuarioService){
      
    }
  canActivate(): boolean {
    if(this._usuarioService.estaLogueado()){

      return true;
    }else{
      console.log("No tiene permisos");
      return false;

    }
  }
  
}
