import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-highchart-demo',
  templateUrl: './highchart-demo.component.html',
  styleUrls: ['./highchart-demo.component.css']
})
export class HighchartDemoComponent implements OnInit {
  title = 'myHighcharts';
  data=[{

    name:'ItSolutionStuff.com',
    data:[500,700,555,444,777,877,944,567,666,789,456,654]
},{
  name:'Nicesnippets.com',
  data:[677,455,677,877,455,778,888,567,785,488,567,654]

}];
highcharts=Highcharts;
chartOptions = {
  chart: {
    type:"spline"
  },
  title:{
    text:"Monthly Site Visitor"
  },
  xAxis:{
    categories:["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"]
  },
  yAxis: {
    title:{
      text:"Visitors"
    }
  },
  series:this.data
};


  ngOnInit(): void {
  }

}
