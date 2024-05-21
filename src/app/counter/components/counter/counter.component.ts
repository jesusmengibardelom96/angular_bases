import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{counter}}</h3>
    <button (click)="increaseOrDecreaseBy(true)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseOrDecreaseBy(false)">-1</button>
  `
})

export class CounterComponent {

  public title: string = 'Mi primera app de Angular';
  public counter: number = 20

  constructor() { }

  increaseOrDecreaseBy( value:boolean ):void {
    if(value) this.counter+=1
    else this.counter-=1
  }

  resetCounter():void {
    this.counter = 20
  }
}
