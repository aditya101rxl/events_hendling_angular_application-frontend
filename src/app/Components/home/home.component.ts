import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  event_type: any;
  sub_event_type: any;
  tag_list: any;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params=>{
      // console.log(params);
      this.event_type = (params['event_type']?params['event_type']:'all_events');
      this.sub_event_type = (params['sub_event_type']?params['sub_event_type']:'upcoming');
      this.tag_list = (params['tag_list']?params['tag_list']:',');
    });
    this.redirect();
  }

  redirect(): void{
    this.router.navigate(['/events'],
    { queryParams: 
      {
        event_type: this.event_type,
        sub_event_type: this.sub_event_type,
        tag_list: this.tag_list,
        page: '1'
      }
    });
  }

  change_event_type(e_type: string[]){
    this.event_type = e_type[0];
    this.sub_event_type = e_type[1];
    this.redirect();
  }

  add_tags(tag: string){
    if (this.tag_list.indexOf(","+tag+",") > -1){
      this.tag_list = this.tag_list.replace((","+tag+","), ",");
    }else{
      this.tag_list += (tag+",");
    }
    this.redirect();
  }

}
