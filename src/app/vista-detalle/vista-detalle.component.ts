import { Component, Input, input, OnInit } from '@angular/core';
import { CoinsService } from '../coins.service';

@Component({
  selector: 'app-vista-detalle',
  standalone: true,
  imports: [],
  templateUrl: './vista-detalle.component.html',
  styleUrl: './vista-detalle.component.css'
})
export class VistaDetalleComponent implements OnInit{
  @Input() id!: string;
  moneda: any;
  constructor(private coinsService: CoinsService) { }
  

  ngOnInit() {
    this.coinsService.getCoinDetail(this.id).subscribe((data:any)=>{
      console.log(data);
      this.moneda = data;
    })
  }
}
