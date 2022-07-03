import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './Components/home/home.component';
import { ViewComponent } from './Components/view/view.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'view/:id', component: ViewComponent},
  // {path: '**', component: PageNotFound}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }