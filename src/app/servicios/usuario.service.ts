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
 token:string="";
  constructor(private http:HttpClient) { 
    this.cargarStorage();
  }

  login(usuario:Usuario,recordar:boolean){
    let url=URL_SERVICE;
    return this.http.post(url,usuario).pipe(
      map((res:any)=>{
          usuario.token=res;
          this.token=res;
          if(recordar){
            this.guardarStorage(this.token,usuario);
          }  
          return res;
      }),
      catchError(err=>throwError(err))
      )
  }
  cargarStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
    } else {
      this.token = '';
    }
  }
  estaLogueado(){
    return this.token.length>0
  }
  guardarStorage(token: string, usuario:Usuario) {
    this.token = token;
    console.log("guardar");
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }
  obtenerSitiosDeInteres(){

    let url=URL_PAGES;
    return this.http.get(url,{headers: new HttpHeaders().set('Authorization', this.token)}).pipe(
      map((res:any)=>{
          return res.sites;
      }),
      catchError(err=>throwError(err))
      )
  }
}
