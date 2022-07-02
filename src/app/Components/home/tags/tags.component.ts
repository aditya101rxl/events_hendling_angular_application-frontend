import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  @Output() tagEmitter = new EventEmitter();
  tag: string;
  tag_list?: any;

  constructor(private http: HttpClient) {
    this.tag = "";
  }

  ngOnInit(): void {
    this.http.get('http://127.0.0.1:3000/api/tags').subscribe(data=>{
      this.tag_list = data;
    });
  }

  add_tag(name: string){
    this.tag = name;
    this.tagEmitter.emit(this.tag);
  }
}
