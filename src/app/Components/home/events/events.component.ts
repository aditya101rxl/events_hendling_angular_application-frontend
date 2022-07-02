import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit, OnChanges {

  @Input() url: string;
  events: any;
  constructor(private http: HttpClient) {
    this.url = "";
    this.events = [];
  }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges){
    this.get_data();
  }

  get_data(): void{
    this.http.get(this.url).subscribe(data=>{
      this.events = data;
      // console.log(this.events);
    });
  }

}
