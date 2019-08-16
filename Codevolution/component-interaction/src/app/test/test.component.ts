import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h2>{{"Hello "+ name}}</h2>
        <button (click)="fireEvent()">Send Event</button> 
        `,
  styleUrls: []
})
export class TestComponent implements OnInit {
  
  @Input('parentData') public name;
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  fireEvent(){
    console.log('DETAILS : '+ name);
    this.childEvent.emit('Hey Codevolution');
  }
}
