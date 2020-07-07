import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HighchartsChartComponent } from 'highcharts-angular';
import {HighchartsChartModule} from 'highcharts-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import * as highstock from 'highcharts/modules/stock.src';
import { HighchartAppComponent } from './highchart-app/highchart-app.component';
import { StockChartAppComponent } from './stock-chart-app/stock-chart-app.component';
import { HighchartDemoComponent } from './highchart-demo/highchart-demo.component';
import { GroupedBarChartComponent } from './grouped-bar-chart/grouped-bar-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    PieChartComponent,
    HighchartAppComponent,
    StockChartAppComponent,
    HighchartDemoComponent,
    GroupedBarChartComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,
    ChartModule
  ],
  providers: [ { provide: HIGHCHARTS_MODULES, useFactory: () => [highstock]}],
  bootstrap: [AppComponent]
})
export class AppModule { }
