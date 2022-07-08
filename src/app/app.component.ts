import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  title = 'events';
  user?: any;
  token?: any;
  constructor(private router: Router, private cookies: CookieService){ }

  ngOnInit(){
    this.user = localStorage.getItem('user');
    this.token = localStorage.getItem('token');
  }
  ngOnChanges(changes: SimpleChanges){ 
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['/'])
    window.location.reload();
  }
  logedIn(){
    return !!localStorage.getItem('token');
  }
}
