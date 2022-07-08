import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  current_user?: any
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void { }

  onClickSubmit(data: any){
    console.log(data);
    this.http.get('http://127.0.0.1:3000/api/auth/login?'+
                  'email='+data.email+
                  '&password='+data.password)
    .subscribe(res=>{
      this.current_user = res;
      localStorage.setItem('token', this.current_user.token);
      this.router.navigate(['/events'])
    }, error =>{
      console.log(error);
      alert(error.error);
    });
  }

}
