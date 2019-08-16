import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h2 *ngIf="displayName; else elseBlock">
                Codevolution
            </h2>
            <ng-template #elseBlock>
              <h2>Name is hidden</h2>
            </ng-template>

          <!-- This is another way -->
          <div *ngIf="nDisplayName; then thenBlock; else elseBlock">
            <ng-template #thenBlock>
              <h2>Codevolution</h2>
            </ng-template>

            <ng-template #elseBlock>
              <h2>Name is hidden</h2>
            </ng-template>
          </div>

          <!-- ngSwitch  -->
          <div [ngSwitch]="color">
              <div *ngSwitchCase="'red'">You picked red color</div>
              <div *ngSwitchCase="'blue'">You picked blue color</div>
              <div *ngSwitchCase="'green'">You picked green color</div>
              <div *ngSwitchDefault>Pick Again</div>
          </div>

          <!-- ngFor -->
          <div *ngFor="let color of colors; index as i">
            <h2>{{i}} {{color}}</h2>
          </div>

          <!-- Few more examples -->
          <div *ngFor="let color of colors; first as f">
            <h2>{{f}} {{color}}</h2>
          </div>

          <div *ngFor="let color of colors; last as l">
            <h2>{{l}} {{color}}</h2>
          </div>

          <div *ngFor="let color of colors; odd as o">
            <h2>{{o}} {{color}}</h2>
          </div>

          <div *ngFor="let color of colors; even as e">
            <h2>{{e}} {{color}}</h2>
          </div>
            `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  //
  public colors = ["red", "blue", "green", "yellow"];


  // ngSwitch
  public color = "Orange";

  // For If Block
  displayName = false;
  nDisplayName = false;

  constructor() { }

  ngOnInit() {
  }

}
