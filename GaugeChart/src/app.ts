//our root app component
import {Component, NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {BrowserAnimationsModule} from '@angular/platform-browser-animations';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {single} from '../data.ts';

@Component({
  selector: 'my-app',
  template: `
    <ngx-charts-gauge
      [view]="view"
      [scheme]="colorScheme"
      [results]="data"
      [min]="0"
      [max]="100"
      [angleSpan]="240"
      [startAngle]="-120"
      [units]="'alerts'"
      [bigSegments]="10"
      [smallSegments]="5"
      (select)="onSelect($event)">
    </ngx-charts-gauge>
  `
})
export class App {
  view: any[] = [700, 400];
  data: any[];
  
  constructor() {
    this.data = single;
  }
  
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C']
  };
  
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