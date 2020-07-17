import { Component, OnInit, Input } from '@angular/core';
import { UsuarioService } from '../../servicios/usuario.service';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styles: [
  ]
})
export class PaginaComponent implements OnInit {
public sitios:any[];
  constructor(public _sitios:UsuarioService) { }

  ngOnInit(): void {
    this.obtenerSitios();
  }
  obtenerSitios(){
    this._sitios.obtenerSitiosDeInteres().subscribe((res)=>{
        this.sitios=res;
        console.log(this.sitios);
    }); 
  }
}
