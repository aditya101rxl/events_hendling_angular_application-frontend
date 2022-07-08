import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  current_user?:any
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }
  onClickSubmit(data: any){
    if(data.password !== data.confirmpassword){
      alert("password != confirmpassword")
    }else{
      this.http.get('http://127.0.0.1:3000/api/auth/register?'+
                    'email='+data.email+'&password='+data.password)
      .subscribe(res=>{
        this.current_user = res;
        localStorage.setItem('token', this.current_user.token);
        this.router.navigate(['/events']);
      }, error => {
        alert(error.error);
      });
    }
  }

}
