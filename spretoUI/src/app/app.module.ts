import { NotFound } from './components/notfound.component';
import { WorldMap } from './components/worldMap.component';
import { CityList } from './components/cityList.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CountriesMapModule } from 'countries-map';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent, WorldMap, CityList, NotFound
  ],
  imports: [
    BrowserModule, CountriesMapModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
