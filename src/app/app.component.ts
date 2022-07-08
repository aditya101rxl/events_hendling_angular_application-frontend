import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'events';
  current_user?: any;
  constructor(private router: Router, private http: HttpClient){ }

  ngOnInit(){
    // console.log(localStorage.getItem('token'));
    if (!!localStorage.getItem('token')){
      this.http.get("http://127.0.0.1:3000/api/auth/restoreUser").subscribe(data=>{
        this.current_user = data;
        // console.log(this.current_user.token)
        localStorage.setItem('token', this.current_user.token);
      }, error=>{
        console.log(error);
      })
    }
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
