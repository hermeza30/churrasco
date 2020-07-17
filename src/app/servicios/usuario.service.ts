import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Usuario } from '../modelos/usuario.model';
import {map, catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';
import { URL_SERVICE, URL_PAGES } from '../config/config';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
public token:string;
  constructor(private http:HttpClient) { 
  
  }

  login(usuario:Usuario){
    let url=URL_SERVICE;
    console.log(usuario);
    return this.http.post(url,usuario).pipe(
      map((res:any)=>{
          usuario.token=res;
          this.token=res;  
          return res;
      }),
      catchError(err=>throwError(err))
      )
  }
  estaLogueado(){
    return this.token.length>0
  }
  obtenerSitiosDeInteres(){

    let url=URL_PAGES;
    
    return this.http.get(url,{headers: new HttpHeaders().set('Authorization', this.token)}).pipe(
      map((res:any)=>{
          console.log(res);
          return res;
      }),
      catchError(err=>throwError(err))
      )
  }
}
