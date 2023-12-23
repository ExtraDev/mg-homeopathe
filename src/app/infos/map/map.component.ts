import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
    private map: any;

    private initMap(): void {
        this.map = L.map('map', {
            center: [46.93104618674364, 7.044459538606237],
            zoom: 15
        })

        const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 20,
            minZoom: 3,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        });

        tiles.addTo(this.map);

        L.marker(
            [46.93104618674364, 7.044459538606237],
            {
                icon: L.icon({
                    iconUrl: '../../../assets/location-pin.png',
                    iconSize: [38, 40],
                    iconAnchor: [17, 40],
                    shadowAnchor: [22, 94]
                })

            }).addTo(this.map);
    }

    ngAfterViewInit(): void {
        this.initMap();
    }
}