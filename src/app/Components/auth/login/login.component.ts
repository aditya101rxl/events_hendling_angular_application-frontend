import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  currentUser?: any;
  constructor(private http: HttpClient, private router: Router, private cookies: CookieService) { }

  ngOnInit(): void { }

  onClickSubmit(data: any){
    console.log(data);
    this.http.get('http://127.0.0.1:3000/api/auth/login?'+
                  'email='+data.email+
                  '&password='+data.password)
    .subscribe(res=>{
      this.currentUser = res;

      console.log(this.currentUser);

      localStorage.setItem('token', this.currentUser.token);
      localStorage.setItem('user', this.currentUser.email);

      this.router.navigate(['/events'])
    }, error =>{
      console.log(error);
      alert(error.error.msg + ', please check!');
    });
  }

}
