import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
    constructor(public _usuarioService:UsuarioService,public router:Router){
      
    }
  canActivate(): boolean {
    if(this._usuarioService.estaLogueado()){

      return true;
    }else{
      console.log("No tiene permisos");
      this.router.navigate(['/login']);
      return false;

    }
  }
  
}
