import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit, OnChanges {

  @Output() tagEmitter = new EventEmitter();
  tag?: string;
  tag_list?: any;
  @Input() selected?: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://127.0.0.1:3000/api/events/tags').subscribe(data=>{
      this.tag_list = data;
    });
  }

  ngOnChanges(changes: SimpleChanges){
    // console.log(this.selected);
    // for (let propName in changes) {
    //   let chng = changes[propName];
    //   let cur  = JSON.stringify(chng.currentValue);
    //   console.log(cur);
    // }
  }

  isSelected(name: string){
    // console.log(this.selected.indexOf(name));
    return (this.selected.indexOf(","+name+",")>=0);
  }

  add_tag(name: string){
    this.selected += (name+",");
    this.tagEmitter.emit(name);
  }
}
