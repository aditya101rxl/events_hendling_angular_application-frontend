import { Component, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() eventTypeEmitter = new EventEmitter();

  event_type: string[];

  constructor() {
    this.event_type = ["all_events", "upcoming"];
  }

  ngOnInit(): void {
  }

  event_type_handler(e_type: string){
    this.event_type[0] = e_type;
    this.event_type[1] = "upcoming";
    this.event_handler();
  }

  sub_event_type_handler(e_type: string){
    this.event_type[1] = e_type;
    this.event_handler();
  }

  event_handler(){
    console.log(this.event_type);
    this.eventTypeEmitter.emit(this.event_type);
  }


}
