import { Component, OnInit } from '@angular/core';
import { StockChart } from 'angular-highcharts';
import * as moment from 'moment';


@Component({
  selector: 'app-stock-chart-app',
  templateUrl: './stock-chart-app.component.html',
  styleUrls: ['./stock-chart-app.component.css']
})
export class StockChartAppComponent implements OnInit {
  title = 'stockchartApp';
  public objArr=[];
   arrAvailability=[];
   arrPerformance=[];
   arrQuality=[];
   arrOee=[];
   arrDate=[];
   newDatesArray=[];
   public data1=[];
   public data2=[];
   public data3=[];
   public data4=[];
  
   
  stock: StockChart;

  constructor() { }

  ngOnInit(): void {
     this.objArr = [{"runningTime":0,"availability":100,"unplannedDowntime":0,"performance":0,"partsProduced":0,"partsRejected":0,"partsAccepted":0,"quality":0,"oEE":0,"date":"2020-05-10T18:30:00.000Z"},{"runningTime":18850,"availability":98.0225988700565,"unplannedDowntime":840,"performance":44.50453083893598,"partsProduced":261,"partsRejected":12,"partsAccepted":249,"quality":95.40229885057471,"oEE":41.61877370907835,"date":"2020-05-11T18:30:00.000Z"},{"runningTime":7200,"availability":99.8231047832013,"unplannedDowntime":780,"performance":1.632878924295651,"partsProduced":120,"partsRejected":0,"partsAccepted":120,"quality":100,"oEE":1.6299904395824578,"date":"2020-05-12T18:30:00.000Z"},{"runningTime":11400,"availability":99.39692982456141,"unplannedDowntime":3300,"performance":2.083333333333333,"partsProduced":190,"partsRejected":0,"partsAccepted":190,"quality":100,"oEE":2.0707693713450293,"date":"2020-05-13T18:30:00.000Z"},{"runningTime":0,"availability":0,"unplannedDowntime":0,"performance":0,"partsProduced":0,"partsRejected":0,"partsAccepted":0,"quality":0,"oEE":0,"date":"2020-05-14T18:30:00.000Z"},{"runningTime":0,"availability":0,"unplannedDowntime":0,"performance":0,"partsProduced":0,"partsRejected":0,"partsAccepted":0,"quality":0,"oEE":0,"date":"2020-05-15T18:30:00.000Z"},{"runningTime":0,"availability":0,"unplannedDowntime":0,"performance":0,"partsProduced":0,"partsRejected":0,"partsAccepted":0,"quality":0,"oEE":0,"date":"2020-05-16T18:30:00.000Z"},{"runningTime":0,"availability":100,"unplannedDowntime":0,"performance":0,"partsProduced":0,"partsRejected":0,"partsAccepted":0,"quality":0,"oEE":0,"date":"2020-05-17T18:30:00.000Z"},{"runningTime":7370,"availability":68.75,"unplannedDowntime":4500,"performance":51.18055555555555,"partsProduced":134,"partsRejected":0,"partsAccepted":134,"quality":100,"oEE":35.186631944444436,"date":"2020-05-18T18:30:00.000Z"},{"runningTime":6035,"availability":98.02430555555556,"unplannedDowntime":1138,"performance":10.564971751412429,"partsProduced":102,"partsRejected":0,"partsAccepted":102,"quality":100,"oEE":10.356240191462648,"date":"2020-06-02T18:30:00.000Z"},{"runningTime":9450,"availability":94.5919006003848,"unplannedDowntime":2333,"performance":21.905931987296878,"partsProduced":189,"partsRejected":4,"partsAccepted":185,"quality":97.88359788359789,"oEE":20.282692703900402,"date":"2020-06-03T18:30:00.000Z"},{"runningTime":4620,"availability":100,"unplannedDowntime":0,"performance":22.126436781609197,"partsProduced":66,"partsRejected":0,"partsAccepted":66,"quality":100,"oEE":22.126436781609197,"date":"2020-06-04T18:30:00.000Z"},{"runningTime":0,"availability":100,"unplannedDowntime":0,"performance":0,"partsProduced":0,"partsRejected":0,"partsAccepted":0,"quality":0,"oEE":0,"date":"2020-06-05T18:30:00.000Z"},{"runningTime":0,"availability":0,"unplannedDowntime":0,"performance":0,"partsProduced":0,"partsRejected":0,"partsAccepted":0,"quality":0,"oEE":0,"date":"2020-06-06T18:30:00.000Z"},{"runningTime":22020,"availability":96.66495009686358,"unplannedDowntime":4080,"performance":18.792399059691682,"partsProduced":364,"partsRejected":0,"partsAccepted":364,"quality":100,"oEE":18.165663173054426,"date":"2020-06-07T18:30:00.000Z"},{"runningTime":95315,"availability":94.38699084885235,"unplannedDowntime":8581,"performance":62.625572528966565,"partsProduced":1313,"partsRejected":0,"partsAccepted":1313,"quality":100,"oEE":59.11039341195706,"date":"2020-06-08T18:30:00.000Z"},{"runningTime":15820,"availability":99.83870534154143,"unplannedDowntime":60,"performance":42.52802494690717,"partsProduced":226,"partsRejected":0,"partsAccepted":226,"quality":100,"oEE":42.45942951431988,"date":"2020-06-09T18:30:00.000Z"},{"runningTime":314861,"availability":91.15423575054004,"unplannedDowntime":65233,"performance":43.9122775828224,"partsProduced":5850,"partsRejected":76,"partsAccepted":5774,"quality":98.7008547008547,"oEE":39.5078804366831,"date":"2020-06-10T18:30:00.000Z"},{"runningTime":261809,"availability":91.83318661648411,"unplannedDowntime":55571,"performance":37.27731873798103,"partsProduced":4606,"partsRejected":98,"partsAccepted":4508,"quality":97.87234042553192,"oEE":33.50458905073402,"date":"2020-06-11T18:30:00.000Z"},{"runningTime":111590,"availability":94.63502209093572,"unplannedDowntime":22148,"performance":26.71193675600631,"partsProduced":2038,   "partsRejected":0,"partsAccepted":2038,"quality":100,"oEE":25.278847249963352,"date":"2020-06-12T18:30:00.000Z"},{"runningTime":0,"availability":0,"unplannedDowntime":0,"performance":0,"partsProduced":0,"partsRejected":0,"partsAccepted":0,"quality":0,"oEE":0,"date":"2020-06-13T18:30:00.000Z"},{"runningTime":218170,"availability":97.35826296743065,"unplannedDowntime":13881,"performance":45.8998672108624,"partsProduced":3974,"partsRejected":0,"partsAccepted":3974,"quality":100,"oEE":44.687313420852895,"date":"2020-06-14T18:30:00.000Z"},{"runningTime":356115,"availability":90.00838257242746,"unplannedDowntime":51756,"performance":75.27162421066691,"partsProduced":6517,"partsRejected":63,"partsAccepted":6454,"quality":99.03329752953813,"oEE":67.09582310628537,"date":"2020-06-15T18:30:00.000Z"},{"runningTime":222690,"availability":95.8534889902067,"unplannedDowntime":21061,"performance":50.64693450418511,"partsProduced":4385,"partsRejected":40,"partsAccepted":4345,"quality":99.0877993158495,"oEE":48.10400905645088,"date":"2020-06-16T18:30:00.000Z"},{"runningTime":187920,"availability":96.07450266811148,"unplannedDowntime":19800,"performance":36.013031193625814,"partsProduced":3118,"partsRejected":61,"partsAccepted":3057,"quality":98.0436177036562,"oEE":33.92244524054453,"date":"2020-06-17T18:30:00.000Z"},{"runningTime":214690,"availability":96.39324487334137,"unplannedDowntime":19381,"performance":44.91811363438447,"partsProduced":3889,"partsRejected":40,"partsAccepted":3849,"quality":98.97145795834405,"oEE":42.85268885441812,"date":"2020-06-18T18:30:00.000Z"},{"runningTime":227130,"availability":80.00490687166486,"unplannedDowntime":104518,"performance":46.015367631624514,"partsProduced":3984,"partsRejected":0,"partsAccepted":3984,"quality":100,"oEE":36.81455202033541,"date":"2020-06-19T18:30:00.000Z"},{"runningTime":0,"availability":0,"unplannedDowntime":0,"performance":0,"partsProduced":0,"partsRejected":0,"partsAccepted":0,"quality":0,"oEE":0,"date":"2020-06-20T18:30:00.000Z"},{"runningTime":247345,"availability":77.93195804624726,"unplannedDowntime":115797,"performance":50.2080329052891,"partsProduced":4347,"partsRejected":37,"partsAccepted":4310,"quality":99.14883827927306,"oEE":38.79505970362513,"date":"2020-06-21T18:30:00.000Z"},{"runningTime":209940,"availability":85.27770135816868,"unplannedDowntime":91132,"performance":33.765574481531225,"partsProduced":3583,"partsRejected":29,"partsAccepted":3554,"quality":99.19062238347753,"oEE":28.561449483753886,"date":"2020-06-22T18:30:00.000Z"},{"runningTime":166690,"availability":76.59139664860342,"unplannedDowntime":144274,"performance":27.467925800946773,"partsProduced":2878,"partsRejected":92,"partsAccepted":2786,"quality":96.80333564975678,"oEE":20.365551581568226,"date":"2020-06-23T18:30:00.000Z"},{"runningTime":261200,"availability":83.29802359945927,"unplannedDowntime":105539,"performance":42.49034248291002,"partsProduced":4452,"partsRejected":55,"partsAccepted":4397,"quality":98.76460017969451,"oEE":34.956362846508824,"date":"2020-06-24T18:30:00.000Z"},{"runningTime":329355,"availability":88.55354723567224,"unplannedDowntime":67910,"performance":56.43621188576341,"partsProduced":5768,"partsRejected":42,"partsAccepted":5726,"quality":99.27184466019418,"oEE":49.61236268948054,"date":"2020-06-25T18:30:00.000Z"},{"runningTime":275165,"availability":86.42632930657281,"unplannedDowntime":72550,"performance":51.34757472422443,"partsProduced":4729,"partsRejected":0,"partsAccepted":4729,"quality":100,"oEE":44.377824022096746,"date":"2020-06-26T18:30:00.000Z"},{"runningTime":0,"availability":0,"unplannedDowntime":0,"performance":0,"partsProduced":0,"partsRejected":0,"partsAccepted":0,"quality":0,"oEE":0,"date":"2020-06-27T18:30:00.000Z"},{"runningTime":171355,"availability":71.82776089159067,"unplannedDowntime":65092,"performance":87.50056599501924,"partsProduced":2973,"partsRejected":0,"partsAccepted":2973,"quality":100,"oEE":62.84969732169092,"date":"2020-06-28T18:30:00.000Z"}]


    for(var i=0;i<this.objArr.length;i++)
{
   this.arrAvailability.push(this.objArr[i].availability)
   this.arrDate.push(this.objArr[i].date)
   this.arrPerformance.push(this.objArr[i].performance)
   this.arrQuality.push(this.objArr[i].quality)
   this.arrOee.push(this.objArr[i].oEE)

}
for(var i=0;i<this.arrDate.length;i++){
  let time=new Date(this.arrDate[i]);
  this.newDatesArray.push(time.getTime())
}
this.data1=this.newDatesArray.map((value,i) => [value,this.arrAvailability[i]])
this.data2=this.newDatesArray.map((value,i) =>[value,this.arrQuality[i]])
this.data3=this.newDatesArray.map((value,i) =>[value,this.arrPerformance[i]])
this.data4=this.newDatesArray.map((value,i) =>[value,this.arrOee[i]])



console.log(this.data1);
console.log(this.data2)
/* console.log(this.newDatesArray);
console.log(this.arrAvailability);  */

    this.stock = new StockChart(<any>{

      
      title: {
        text: 'Machine data'
      },
      rangeSelector :{
        selected: 4,
      
      },
     /*  legend:{
        enabled: true
      },
      credits:{
        enabled:false
      }, */
      
      xAxis: {
        type:'datetime',
        dateTimeLabelFormats: {
          day: '%e %b %Y'
        }      
    
      },

      series: [
        {
          
          name: 'Availability ',
          data:this.data1
        },
        {
          name: 'performance',
          data: this.data2
          },
          {
            name: 'quality',
            data: this.data3
          },
          {
            name: 'oEE',
            data: this.data4
          }
      ]


    });
    
  }

  }


