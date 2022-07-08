import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  currentUser?:any
  constructor(private http: HttpClient, private router: Router, private cookies: CookieService) { }

  ngOnInit(): void {
  }
  onClickSubmit(data: any){
    console.log(data);
    if(data.password !== data.confirmpassword){
      alert("password != confirmpassword")
    }else{
      this.http.get('http://127.0.0.1:3000/api/auth/register?'+
                    'email='+data.email+'&password='+data.password)
      .subscribe(data=>{
        this.currentUser = data;
        
        if(this.currentUser.msg=='success'){

          localStorage.setItem('token', this.currentUser.token);
          localStorage.setItem('user', this.currentUser.email);

          this.router.navigate(['/events'])
        }else{
          alert(this.currentUser.msg);
        }
      });
    }
  }

}
