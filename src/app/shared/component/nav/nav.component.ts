import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Output() title = new EventEmitter<string> ();
  constructor() { }

  ngOnInit() {
  }
getTitle(words){
  this.title.emit(words);
}
}
