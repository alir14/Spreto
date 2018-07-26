import { NotFound } from './components/notfound.component';
import { CityList } from './components/cityList.component';
import { WorldMap } from './components/worldMap.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'/worldmap', pathMatch:'full'},
  {path:'worldmap', component: WorldMap },
  {path:'cities/:id', component: CityList },
  {path:'**', component: NotFound }
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
