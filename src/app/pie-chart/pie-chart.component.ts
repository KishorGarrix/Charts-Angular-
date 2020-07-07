import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor() { }
  data=[{
    type: 'pie',
    name: 'Browser share',
    data: [
       ['Firefox',   45.0],
       ['IE',       26.8],
       {
          name: 'Chrome',
          y: 12.8,
          sliced: true,
          selected: true
       },
       ['Safari',    8.5],
       ['Opera',     6.2],
       ['Others',      0.7]
    ]
 }];
 highcharts = Highcharts;
   chartOptions = {   
      chart : {
         plotBorderWidth: null,
         plotShadow: false
      },
      title : {
         text: 'Browser market users list'   
      },
      tooltip : {
         pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions : {
         pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
               enabled: true,
               format: '<b>{point.name}%</b>: {point.percentage:.1f} %',
             /*   style: {
                  color: (Highcharts.theme && Highcharts.theme.contrastTextColor)||
                  'black'
               }  */
            }
         }
      },
      series:this.data
};

  ngOnInit(): void {}
  

}
