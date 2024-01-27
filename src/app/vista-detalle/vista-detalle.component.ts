import { Component, Input, input, OnInit, NgModule } from '@angular/core';
import { CoinsService } from '../coins.service';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from "ng-apexcharts";
import { Router, RouterModule } from '@angular/router';
import { UsuarioServiceService } from '../usuario-service.service';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexLegend
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  labels: string[];
  legend: ApexLegend;
  subtitle: ApexTitleSubtitle;
};

@Component({
  selector: 'app-vista-detalle',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule, RouterModule],
  templateUrl: './vista-detalle.component.html',
  styleUrl: './vista-detalle.component.css'
})
export class VistaDetalleComponent implements OnInit{
  @Input() id!: string;
  expandirDescripcion: boolean = false;
  moneda: any;
  precioPorDia: any;

  chartOptions: ChartOptions = {
    series: [],
    chart: {
      type: 'line' // o el tipo de gráfico que desees
    },
    xaxis: {},
    stroke: {},
    dataLabels: {},
    yaxis: {},
    title: {},
    labels: [],
    legend: {},
    subtitle: {}
  };

  constructor(private coinsService: CoinsService, private router:Router, private usuario:UsuarioServiceService) { }
  

  ngOnInit() {
    if(!this.usuario.user.uid){
      this.router.navigate(['login']);
    }


    this.coinsService.getCoinDetail(this.id).subscribe((data:any)=>{
      //console.log(data);
      this.moneda = data;
    })
    this.coinsService.getCoinMarketChart(this.id).subscribe((data:any)=>{
      this.precioPorDia = data.prices;
      //creo un array series dentro de charOptions

      this.chartOptions = {
        series: [
          {
            name: "STOCK ABC",
            data: data.prices.map((priceData: [number, number]) => priceData[1])
          }
        ],
        chart: {
          type: "area",
          height: 350,
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "straight"
        },
  
        title: {
          text: "Price changes per day (last 30 days)",
          align: "left"
        },
        subtitle: {
          text: "Price changes",
          align: "left"
        },
        labels: data.prices.map((priceData: [number, number]) => this.toDateString(priceData[0])),
        xaxis: {
          type: "datetime"
        },
        yaxis: {
          opposite: true
        },
        legend: {
          horizontalAlign: "left"
        }
      };
    })
    
    
  }
  
  toDateString(timeInMilliseconds: number): string {
    const date = new Date(timeInMilliseconds);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
  
    return `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
  }

  followCoin(id:any,img:any){
     //sube a firestore
     this.coinsService.followCoin(id,this.usuario.user.uid,img);
  }
}
