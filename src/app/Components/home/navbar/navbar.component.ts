import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() eventTypeEmitter = new EventEmitter();

  event_type: string[];

  constructor(private route: ActivatedRoute) {
    this.event_type = ["all_events", "upcoming"];
    this.route.queryParams.subscribe(params=>{
      // console.log(params);
      this.event_type[0] = (params['event_type']?params['event_type']:"all_events");
      this.event_type[1] = (params['sub_event_type']?params['sub_event_type']:"upcoming");
    });
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
    // console.log(this.event_type);
    this.eventTypeEmitter.emit(this.event_type);
  }

  isSelected(name: string){
    return (this.event_type[0]==name || this.event_type[1]==name);
  }


}
