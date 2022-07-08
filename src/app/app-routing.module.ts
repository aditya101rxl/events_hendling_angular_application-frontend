import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './Components/home/home.component';
import { ViewComponent } from './Components/view/view.component';
import { PlayComponent } from './Components/play/play.component';
import { LoginComponent } from './Components/auth/login/login.component';
import { RegisterComponent } from './Components/auth/register/register.component'


const routes: Routes = [
  {path: '', redirectTo:'/events', pathMatch: 'full'},
  {path: 'events', component: HomeComponent},
  {path: 'view/:id', component: ViewComponent},
  {path: 'play', component: PlayComponent},
  {path: 'auth/login', component: LoginComponent},
  {path: 'auth/register', component: RegisterComponent}
  // {path: '**', component: PageNotFound}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }