import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { initializeApp } from 'firebase/app';
import { getFirestore, getDocs,collection,onSnapshot  } from '@angular/fire/firestore';
import { Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CoinsService {
  firestore=inject(Firestore);  //Esto es lo mismo que ponerlo en el constructor
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
  
  obtenerDatosFirestore(){
    getDocs(collection(this.firestore,'monedas')).then((querySnapshot)=>{
      querySnapshot.forEach((doc)=>{
        console.log(doc.data());
      })
    })
  }
  getCoinMarketChart(id:any){
    return this.http.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=30&interval=daily
    `)
  }
  
}
