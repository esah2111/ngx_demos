//our root app component
import {Component, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser-animations';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {single, multi} from '../data.ts';

@Component({
  selector: 'my-app',
  template: `
    <ngx-charts-pie-grid
      [view]="view"
      [scheme]="colorScheme"
      [results]="single"
      (select)="onSelect($event)">
    </ngx-charts-pie-grid>
  `
})
export class App {
  single: any[];
  multi: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;
  
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