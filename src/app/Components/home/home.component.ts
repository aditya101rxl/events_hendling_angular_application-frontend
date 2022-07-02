import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  url: string;
  events: any = [];
  event_type: string;
  sub_event_type: string;
  tag_list: string;

  constructor() { 
    this.event_type = "all_events";
    this.sub_event_type = "upcoming";
    this.tag_list = "";
    this.url = "";
    this.build_url();
  }

  build_url(): void{
    this.url = "http://127.0.0.1:3000/api/events?event_type="+
                this.event_type+"&sub_event_type="+
                this.sub_event_type+"&tag_list="+
                this.tag_list;
  }

  change_event_type(e_type: string[]){
    this.event_type = e_type[0];
    this.sub_event_type = e_type[1];
    this.build_url();
  }

  add_tags(tag: string){
    if (this.tag_list.indexOf(tag) > -1){
      this.tag_list = this.tag_list.replace((","+tag), "");
    }else{
      this.tag_list += (","+tag);
    }
    this.build_url();
  }

}
