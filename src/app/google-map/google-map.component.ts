import { Component, OnInit,ViewChild } from '@angular/core';
import {IMap}  from '../Interface/Imap';

import {} from 'googlemaps';
@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  latitude:number;
  longitude:number;
  mapData:IMap[];
  constructor() {
    this.mapData=[{name: 'Vishal', latitude:48.8566,longitude:2.3522},
                  {name: 'Nirmal', latitude:28.4595,longitude:77.0266},
                  {name: 'Vimal', latitude:28.5851,longitude:77.3116},
                  {name: 'Ankit', latitude:18.5793,longitude:73.8143},
                  {name: 'Suraj', latitude:25.0961,longitude:85.3131},
                  {name: 'Ravi', latitude:26.8467,longitude:80.9462},
                  {name: 'Sachin', latitude:22.9734,longitude:78.6569},
                ];
   }

  ngOnInit() {
      var mapProp={
                center: new google.maps.LatLng(18.5793, 73.8143),
                zoom: 15,
                mapTypeID: google.maps.MapTypeId.ROADMAP,
        };

this.map= new google.maps.Map(this.gmapElement.nativeElement,mapProp);


  }

  setMapType(mapTypeId: string){
      this.map.setMapTypeId(mapTypeId);
  }

  setForm(e:any){
      debugger;
      this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude));
  }
  setGoogleMap(data:IMap){
      this.map.setCenter(new google.maps.LatLng(data.latitude, data.longitude));
      //this.map.setZoom(15);
      this.map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
  }
}

