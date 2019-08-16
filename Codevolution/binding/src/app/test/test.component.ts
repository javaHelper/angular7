import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h2>
              Welcome {{name}}
            </h2>
            <h2>{{2+2}}</h2>
            <h2>{{"Welcome"+ name}}</h2>
            <h2>{{name.length}}</h2>
            <h2>{{name.toUpperCase()}}</h2>
            <h2>{{ greetUser() }}</h2>
            <h2>{{ siteUrl }}</h2>

            <!--Attributes & Properties -->
            <input [id]="myId" type="text" value="Vishwas" >
            <input [disabled]="isDisabled" id="{{myId}}" type="text" value="Vishwas" >
            <input bind-disabled="isDisabled" id="{{myId}}" type="text" value="Vishwas" >

            <!-- For ClassBinding -->
            <h2 class="text-success">Codevolution</h2>
            <h2 [class]="successClass">Codevolution</h2>
            <h2 class="text-special" [class]="successClass">Codevolution</h2> <!-- Do not use both -->
            <!-- If we changed hasError = false, it will change it to black color -->
            <h2 [class.text-danger]="hasError">Codevolution</h2>
            <h2 [ngClass]="messageClasses">Codevolution</h2>

            <!-- For Style Binding -->
            <h2 [style.color]="'orange'">Style Binding</h2>
            <h2 [style.color]="hasError ? 'red' : 'green' ">Style Binding 1</h2>
            <h2 [style.color]="highlightColor">Style Binding 2</h2>
            <h2 [ngStyle]="titleStyles">Style Binding 3</h2>


            <!-- Event Binding -->
            <button (click)="onClick()" >Greet</button>
            {{greeting}}

            <button (click)="onClick1($event)" >Greet Newly</button>
            {{greeting}}

            <button (click)="greeting='Welcome Vishwas'" >Greet Newly one more time</button>
            {{greeting}}

            <br><br>
            <!-- Template Reference Variable -->
            <input #myInput type="text">
            <!-- <button (click)="logMessage(myInput.value)" >Log</button> -->
            <!-- Also, we can pass the whole object -->
            <button (click)="logMessage(myInput)" >Log1</button>

            <br><br>
            <!-- Two-way binding -->
            <input [(ngModel)]="firstName" type="text">
            {{firstName}}
            `,
  styles: [`
      .text-success {
        color: green;
      }
      .text-danger{
        color: red;
      }
      .text-special {
        font-style: italic;
      }
  `]
})
export class TestComponent implements OnInit {
  // Two way Binding
  public firstName = "";

  // Template Reference Variable
  logMessage(value){
    console.log(value);
  }

  // Event Binding
  onClick(){
    this.greeting = 'Welcome to codevolution';
    console.log('Welcome to codevolution');
  }
  onClick1(event){
    console.log(event);
    this.greeting = 'Welcome to codevolution';  
  }
  public greeting = "";

  // Style Binding
  public highlightColor = "orange";
  public titleStyles = {
    color: "blue",
    fontStyle: "italic"
  }

  public successClass = "text-success";
  public hasError = true;

  public isSpecial = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }

  public name = "Prateek";
  public myId = "testId";
  public isDisabled = false;

  public siteUrl = window.location.href;

  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    return "Hello "+this.name;
  }

}
