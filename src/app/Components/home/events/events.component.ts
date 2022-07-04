import { Component, OnInit, SimpleChanges } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  url: string;
  events: any;
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {
    this.url = "";
    this.events = [];
  }

  ngOnInit(): void { 
    this.route.queryParams.subscribe(params=>{
      // console.log(params);
      this.url = "http://127.0.0.1:3000/api/events?event_type="+
                  params['event_type']+"&sub_event_type="+
                  params['sub_event_type']+"&tag_list="+
                  params['tag_list'];
      this.http.get(this.url).subscribe(data=>{
        this.events = data;
        // console.log(this.events);
      });
    })
  }

  onSelect(id: any){
    // console.log(id);
    this.router.navigate(['/view', id]);
  }

}
