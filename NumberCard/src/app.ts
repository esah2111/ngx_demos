//our root app component
import {Component, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser-animations';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {single} from '../data.ts';

@Component({
  selector: 'my-app',
  template: `
    <ngx-charts-number-card
      [view]="view"
      [scheme]="colorScheme"
      [results]="single"
      (select)="onSelect($event)">
    </ngx-charts-number-card>
  `
})
export class App {
  single: any[];
  multi: any[];

  view: any[] = [700, 400];

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C']
  };

  constructor() {
    Object.assign(this, {single})   
  }
  
  onSelect(event) {
    console.log(event);
  }
  
}


@NgModule({
  imports: [ BrowserModule, BrowserAnimationsModule, NgxChartsModule ],
  declarations: [ App ],
  bootstrap: [ App ]
})
export class AppModule {}