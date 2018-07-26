import { CityModel } from './CityModel';

export class CountryModel{

    constructor(id:number, name:string, cities:CityModel[]) {
        this.Id = id;
        this.Name = name;
        this.Cities = cities;
    }
    Id:number;
    Name:string;
    Cities: CityModel[];
}