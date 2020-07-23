import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../modelos/usuario.model';
import { UsuarioService } from '../../servicios/usuario.service';
import {  FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { sit } from '../pagina/sit';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  public usuario:Usuario;
  public form:FormGroup;
  public logueado:boolean=true;
  public sitios=sit;
  constructor(public _usuarioServicio:UsuarioService, public router:Router) { }

  ngOnInit(): void {
  this.crearForm();
  }
  crearForm(){
    this.form=new FormGroup({
      email:new FormControl('',Validators.required),
      password:new FormControl('', Validators.required),
      recordar:new FormControl(false)
    });
  }
  logueando(){
    if(this.form.invalid){
      console.log("Form invalido");
      return;
    }
    let usr=new Usuario(this.form.value.email,this.form.value.password);
    let recordar=this.form.value.recordar;
    this._usuarioServicio.login(usr,recordar).subscribe(res=>{
      this.router.navigate(['/pagina']);
      
     
    },err=>{
      this.logueado=false;
    });
    
  }
 
  

}
