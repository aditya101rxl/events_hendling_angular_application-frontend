import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import {HttpClientModule} from '@angular/common/http'; // importing the http module

import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { EventsComponent } from './Components/home/events/events.component';
import { TagsComponent } from './Components/home/tags/tags.component';
import { ViewComponent } from './Components/view/view.component';
import { NavbarComponent } from './Components/home/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    EventsComponent,
    TagsComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // adding it in the imports
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
