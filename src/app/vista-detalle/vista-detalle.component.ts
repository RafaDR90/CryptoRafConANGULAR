import { Component, Input, input, OnInit, NgModule } from '@angular/core';
import { CoinsService } from '../coins.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-vista-detalle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vista-detalle.component.html',
  styleUrl: './vista-detalle.component.css'
})
export class VistaDetalleComponent implements OnInit{
  @Input() id!: string;
  expandirDescripcion: boolean = false;
  moneda: any;
  constructor(private coinsService: CoinsService) { }
  

  ngOnInit() {
    this.coinsService.getCoinDetail(this.id).subscribe((data:any)=>{
      console.log(data);
      this.moneda = data;
    })
  }
}
