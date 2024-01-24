import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoinsService {

  constructor(public http:HttpClient) { }

  getMostWantedCoins(){
    return this.http.get('https://api.coingecko.com/api/v3/search/trending')
  }

  getCoinDetail(id:any){
    return this.http.get(`https://api.coingecko.com/api/v3/coins/${id}`)
  }

  buscarMonedaPorNombre(nombre:string){
    return this.http.get('https://api.coingecko.com/api/v3/search?query='+nombre)
  }

  
}
