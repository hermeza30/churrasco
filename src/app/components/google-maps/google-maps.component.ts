import { Component, OnInit, Input } from '@angular/core';
import { GoogleMapsModel } from '../../modelos/googlemaps.model';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styles: [
  ]
})
export class GoogleMapsComponent implements OnInit {
@Input('sitio') sitio:any;
@Input('id')id:string;
public position:GoogleMapsModel;
  constructor() { 
  }

  ngOnInit(): void {
  }

}
