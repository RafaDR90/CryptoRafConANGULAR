import { Component } from '@angular/core';
import { UsuarioServiceService } from '../usuario-service.service';
import { Router,RouterModule } from '@angular/router';
import { CoinsService } from '../coins.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';



@Component({
  selector: 'app-vista-monedas',
  standalone: true,
  imports: [CommonModule, RouterModule,FormsModule,ReactiveFormsModule],
  templateUrl: './vista-monedas.component.html',
  styleUrl: './vista-monedas.component.css'
})
export class VistaMonedasComponent {
  constructor(private usuarioService: UsuarioServiceService, private router: Router, private coinService:CoinsService) { }
  monedas:any[]=[];
  allCoins:any[]=[];
  buscarMoneda:string="";
  monedasEncontradas:any[]=[];
  timeoutId:any;

  buscarMonedaPorNombre() {
    console.log(this.buscarMoneda);
    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => {
      this.coinService.buscarMonedaPorNombre(this.buscarMoneda).subscribe((data:any)=>{
        this.monedasEncontradas=data.coins;
        console.log(this.monedasEncontradas);
      })
    }, 1000);
  }
  
  followCoin(id:any){
    console.log("se sigue la moneda con id: "+id);
  }
    

  ngOnInit(): void {
    if (this.usuarioService.user.uid == null) {
      this.router.navigate(['/']);
    }else{
      this.coinService.getMostWantedCoins().subscribe((data:any)=>{
        this.monedas=data.coins;
        console.log(this.monedas);
      })
      
    }
  }

  toEur(dolar: string): number {
    const valorNumerico = parseFloat(dolar.replace(/[^\d.-]/g, ''));
      if (!isNaN(valorNumerico)) {
      return valorNumerico * 0.92;
    } else {
      console.error('Error: dolar no es un número válido');
      return 0; // O el valor que prefieras en caso de error
    }
  }



  

}
