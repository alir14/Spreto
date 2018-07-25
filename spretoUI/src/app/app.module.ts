import { WorldMap } from './components/worldMap.component';
import { CityList } from './components/cityList.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CountriesMapModule } from 'countries-map';

@NgModule({
  declarations: [
    AppComponent, WorldMap, CityList
  ],
  imports: [
    BrowserModule, CountriesMapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
