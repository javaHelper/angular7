import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() valueChange = new EventEmitter();
  counter = 0;

  constructor() { }

  ngOnInit() {
  }

  valueChanged() {
    this.counter = this.counter + 1;
    this.valueChange.emit(this.counter);
  }


  handleclick() {
    console.log('hey I am  clicked in child');
  }

}
