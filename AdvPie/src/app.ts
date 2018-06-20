//our root app component
import {Component, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser-animations';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {single, multi} from '../data.ts';

@Component({
  selector: 'my-app',
  template: `
    <ngx-charts-advanced-pie-chart
      [view]="view"
      [scheme]="colorScheme"
      [results]="single"
      [gradient]="gradient"
      (select)="onSelect($event)">
    </ngx-charts-advanced-pie-chart>
  `
})
export class App {
  single: any[];
  multi: any[];
  
  view: any[] = [700, 400];

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, {single, multi})   
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