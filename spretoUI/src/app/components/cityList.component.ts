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
    selectedCountry: CountryModel;

    constructor(private route: ActivatedRoute, private mapService: MapServices){
        //console.log(this.route.snapshot.params.id);
        this.Id = this.route.snapshot.params.id;
    }

    ngOnInit(){
        this.selectedCountry = this.mapService.getCities(this.Id);
    }

}