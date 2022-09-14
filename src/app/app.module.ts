import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { EventsComponent } from './Components/home/events/events.component';
import { TagsComponent } from './Components/home/tags/tags.component';
import { ViewComponent } from './Components/view/view.component';
import { NavbarComponent } from './Components/home/navbar/navbar.component';
import { PlayComponent } from './Components/play/play.component';
import { LoginComponent } from './Components/auth/login/login.component';
import { RegisterComponent } from './Components/auth/register/register.component';

import { CookieService } from 'ngx-cookie-service'
import { TokenInterceptorService } from './token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    EventsComponent,
    TagsComponent,
    ViewComponent,
    PlayComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CookieService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,   // it intercepts outgoing http requests transform them and then send it to the servers.
                                         // here we are implementing which modify the request and insert the token in it and send to the server.
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
