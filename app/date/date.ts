import { Component } from '@angular/core'

@Component({
  selector: 'date',
  template: `
    <div>Dzisiaj jest {{ today | date:format }}
    <button (click)="toggleFormat()">Zmień format</button></div>
  `
})
export class DateComponent {
  today = Date.now();
  toggle = true;

  get format()   { return this.toggle ? 'shortDate' : 'fullDate'}
  toggleFormat() { this.toggle = !this.toggle; }
}