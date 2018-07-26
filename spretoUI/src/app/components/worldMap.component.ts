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
    service:MapServices;
    @ViewChild('cmap') cmap;


    constructor(private mapService: MapServices){
        this.service = mapService;
    }

    ngOnInit(){
        this.mapData = this.service.getMapData();
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
    }

}