import { CityModel } from './../models/CityModel';
import { CountryModel } from './../models/CountryModel';
import { MapServices } from './../services/mapServiceComponent';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector:'CityList',
    templateUrl: './cityList.component.html',
    providers:[MapServices]
})

export class CityList implements OnInit{
    
    Id:number;
    service: MapServices;
    selectedCountry: CountryModel;

    constructor(private route: ActivatedRoute, private mapService: MapServices){
        this.Id = this.route.snapshot.params.Id;
        this.service = mapService;
    }

    ngOnInit(){
        this.selectedCountry = this.service.getCities(this.Id);
    }

}