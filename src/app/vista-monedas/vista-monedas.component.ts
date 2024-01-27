import { Component } from '@angular/core';
import { UsuarioServiceService } from '../usuario-service.service';
import { Router,RouterModule } from '@angular/router';
import { CoinsService } from '../coins.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



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
  monedasSeguidas:any[]=[];

  buscarMonedaPorNombre() {
    console.log(this.buscarMoneda);
    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => {
      this.coinService.buscarMonedaPorNombre(this.buscarMoneda).subscribe((data:any)=>{
        this.monedasEncontradas=data.coins;
      })
    }, 1000);
  }
  
  followCoin(id:any,img:any){
    //sube a firestore
    this.coinService.followCoin(id,this.usuarioService.user.uid,img);
    //actualiza la lista de monedas seguidas
    this.coinService.obtenerDatosFirestore(this.usuarioService.user.uid).then((querySnapshot)=>{
      this.monedasSeguidas=[];
      querySnapshot.forEach((doc)=>{
        this.monedasSeguidas.push(doc.data());
      })
    })
  }
    

  async ngOnInit(): Promise<void> {
    if (this.usuarioService.user.uid == null) {
      this.router.navigate(['/']);
    } else {
      this.coinService.getMostWantedCoins().subscribe((data: any) => {
        this.monedas = data.coins;
        console.log(this.monedas);
      });
  
      const querySnapshot = await this.coinService.obtenerDatosFirestore(this.usuarioService.user.uid);
      this.monedasSeguidas = querySnapshot.docs.map(doc => doc.data());
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
  borrarMonedaSeguida(id:any){
    this.coinService.borrarMonedaSeguida(id,this.usuarioService.user.uid);
    this.coinService.obtenerDatosFirestore(this.usuarioService.user.uid).then((querySnapshot)=>{
      this.monedasSeguidas=[];
      querySnapshot.forEach((doc)=>{
        this.monedasSeguidas.push(doc.data());
      })
    })
  }



  

}
