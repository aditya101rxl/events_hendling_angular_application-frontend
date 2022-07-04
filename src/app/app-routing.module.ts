import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './Components/home/home.component';
import { ViewComponent } from './Components/view/view.component';
import { PlayComponent } from './Components/play/play.component';


const routes: Routes = [
  {path: '', redirectTo:'/events', pathMatch: 'full'},
  {path: 'events', component: HomeComponent},
  {path: 'view/:id', component: ViewComponent},
  {path: 'play', component: PlayComponent}
  // {path: '**', component: PageNotFound}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }