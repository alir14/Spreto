import { Router } from '@angular/router';
import { MapServices } from './../services/mapServiceComponent';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CountriesData, ChartErrorEvent, ChartSelectEvent } from 'countries-map';

//https://github.com/jagomf/countries-map.git

@Component({
    selector:'WorldMap',
    templateUrl: './worldMap.component.html',
    providers:[MapServices]
})

export class WorldMap implements OnInit{

    mapData: CountriesData;
    @ViewChild('cmap') cmap;


    constructor(private mapService: MapServices,  private router: Router){
    }

    ngOnInit(){
        this.mapData = this.mapService.getMapData();
    }

    mapReady(){
        console.log('map loaded');
        this.cmap.showCaption = false;
    }

    
    mapError(event: ChartErrorEvent){
        console.log(event);
    }

    mapClicked(event: ChartSelectEvent){
        console.log(event);
        let path = '/cities?Id=' + event.value;
        console.log(path);
        this.router.navigate(['/cities', event.value]);

    }

}