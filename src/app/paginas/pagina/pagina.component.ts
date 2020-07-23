import { Component, OnInit, Input } from '@angular/core';
import { UsuarioService } from '../../servicios/usuario.service';
import { sit } from './sit';
import { GoogleMapsModel } from '../../modelos/googlemaps.model';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styles: [
  ]
})
export class PaginaComponent implements OnInit {
public sitios:any[];
public ubi:GoogleMapsModel;
public titulo="Hey! Welcome to Churrasco Travel";
public ver:boolean=false;
public id="exampleModal";
  constructor(public _sitios:UsuarioService) { }

  ngOnInit(): void {
    this.obtenerSitios();
  }
  obtenerSitios(){
    this.sitios=sit;//Moqueado cuando no se puede acceder a la api
    // this._sitios.obtenerSitiosDeInteres().subscribe((res)=>{
    //     this.sitios=res;
    //     console.log(this.sitios)
    // }); 
  }
  verEnMaps(ubicacion:any){
    if(ubicacion._lat){
      this.ver=true;
      console.log(ubicacion)
      this.ubi=new GoogleMapsModel(Number.parseFloat(ubicacion._lat),Number.parseFloat(ubicacion._long));
    }
  }
}
