import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  event?: any
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    // console.log(this.route.snapshot.paramMap);
    this.http.get("http://127.0.0.1:3000/api/event?id="+id).subscribe(data=>{
      this.event = data;
      console.log(this.event);
    });
  }

}
