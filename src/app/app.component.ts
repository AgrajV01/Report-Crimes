// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'heroApp';
// }



import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';

// need to add to make leaflet icons work 
import { icon, Marker } from 'leaflet';
const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
Marker.prototype.options.icon = iconDefault;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit{
  title:String = "Night Crusade Titans";
  private map: any;
  constructor(){}
  ngAfterViewInit(): void {
    this.map = L.map('mapid').setView([49.2, -123], 11);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
    

    L.marker([49.2276, -123.0076]).addTo(this.map)
    .bindPopup("<b>Metrotown</b><br  />cases reported.").openPopup();

    L.marker([49.1867, -122.8490]).addTo(this.map)
    .bindPopup("<b>SFU Surrey</b><br  />cases reported.").openPopup();
  }
}