import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  event?: any
  user?: any
  isRegisterd?: any
  isArchived: boolean = false;
  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    // console.log(this.route.snapshot.paramMap);
    this.http.get("http://127.0.0.1:3000/api/events/event?id="+id).subscribe(data=>{
      this.event = data;
      let current_time = new Date();
      let event_time = new Date(this.event.registration_end);
      if(event_time < current_time){
        this.isArchived = true;
        // console.log(current_time);
        // console.log(event_time);
      }
      // console.log(this.event);
    });
    if (!!localStorage.getItem('token')){
      this.http.get("http://127.0.0.1:3000/api/events/isRegister?event_id="+id).subscribe(data=>{
        this.isRegisterd = data;
      })
    }
  }
  register(){
    if (!!localStorage.getItem('token')){
      this.http.get("http://127.0.0.1:3000/api/events/register?event_id="+this.event.id)
      .subscribe(res=>{
        console.log(res);
        alert('succssfully registered');
        window.location.reload();
      }, err=> {
        console.log(err.error);
        alert(err.error.msg);
      });
    }else{
      if (confirm('please login to register in event')==true){
        this.router.navigate(['/auth/login']);
      }
    }
  }
  unregister(){
    this.http.get("http://127.0.0.1:3000/api/events/unregister?id="+this.isRegisterd.id)
    .subscribe(res=>{
      console.log(res);
      alert('succssfully unregistered');
      window.location.reload();
    }, err=> {
      console.log(err.error);
      alert(err.error.msg);
    });
  }

}
