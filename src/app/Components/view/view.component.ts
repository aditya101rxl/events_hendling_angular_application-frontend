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
  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    // console.log(this.route.snapshot.paramMap);
    this.http.get("http://127.0.0.1:3000/api/events/event?id="+id).subscribe(data=>{
      this.event = data;
      // console.log(this.event);
    });
  }
  register(){
    if (!!localStorage.getItem('token')){
      this.http.get("http://127.0.0.1:3000/api/events/register?"+
                    "user_id="+this.user.id+"&event_id="+this.event.id)
      .subscribe(data=>{
        console.log(data);
      });
    }else{
      this.router.navigate(['/auth/login']);
    }
  }

}
