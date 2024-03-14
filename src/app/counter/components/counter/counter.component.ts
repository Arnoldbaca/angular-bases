import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>Counter: {{ counter }}</p>
    <button (click)="increasBy(+1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increasBy(-1)">-1</button>
  `,
})
export class CounterComponent {
  public counter: number = 10;

  increasBy(value: number): void {
    this.counter += value;
  }

  resetCounter() {
    this.counter = 10;
  }
}
