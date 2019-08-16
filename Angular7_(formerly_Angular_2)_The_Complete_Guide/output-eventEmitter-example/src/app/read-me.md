#Understanding @Output and EventEmitter in Angular

In Angular, a component can emit an event using @Output and EventEmitter. Both are parts of the @angular/core.

So far, it's very simple to use event binding to get the button to call the function in the component. Now, let's tweak the requirement a bit. What if you want to execute a function of AppComponent on the click event of a button inside AppChildComponent?

To do this, you will have to emit the button click event from AppChildComponent. Import EventEmitter and Output from @angular/core.

Here we are going to emit an event and pass a parameter to the event. Consider the code below:

appchild.component.ts

```
import { Component, EventEmitter, Output } from '@angular/core';
@Component({
    selector: 'app-child',
    template: `<button class='btn btn-primary' (click)="valueChanged()">Click me</button> `
})
export class AppChildComponent {
    @Output() valueChange = new EventEmitter();
    Counter = 0;
    valueChanged() { // You can give any function name
        this.counter = this.counter + 1;
        this.valueChange.emit(this.counter);
    }
}
```

Right now, we are performing the following tasks in the AppChildComponent class:

1. Creating a variable called counter, which will be passed as the parameter of the emitted event.
2. Creating an EventEmitter, valueChange, which will be emitted to the parent component on the click event of the button.
3. Creating a function named valueChanged(). This function is called on the click event of the button, and inside the function event valueChange is emitted.
4. While emitting the valueChange event, the value of the counter is passed as a parameter.

In the parent component, AppComponent, the child component, AppChildComponent, can be used as shown in the code below:

appcomponent.ts

```
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-root',
    template: `<app-child (valueChange)='displayCounter($event)'></app-child>`
})
export class AppComponent implements OnInit {
    ngOnInit() {
    }
    displayCounter(count) {
        console.log(count);
    }
}
```

Right now, we are performing the following tasks in the AppComponent class:

1. Using <app-child> in the template.
2. In the <app-child> element, using event binding to use the valueChange event.
3. Calling the displayCounter function on the valueChange event.
4. In the displayCounter function, printing the value of the counter passed from the AppChildComponent.

As you can see, the function AppComponent is called on the click event of the button placed on the AppChildComponent. This is can be done with @Output and EventEmitter. When you run the application and click the button, you can see the value of the counter in the browser console. Each time you click on the button, the counter value is increased by 1.