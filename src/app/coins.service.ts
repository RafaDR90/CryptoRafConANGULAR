import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { initializeApp } from 'firebase/app';
import { getFirestore,onSnapshot  } from '@angular/fire/firestore';
import { Firestore, collection, getDocs, addDoc, query, where, deleteDoc } from '@angular/fire/firestore';


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
  
  async obtenerDatosFirestore(uid:any){
    return getDocs(query(collection(this.firestore, 'monedas'), where('userId', '==', uid)));
  }
  getCoinMarketChart(id:any){
    return this.http.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=30&interval=daily
    `)
  }
  async followCoin(id: any, usuarioId: any,img:any) {
    if (usuarioId == null) {
      alert("Debes iniciar sesión para seguir monedas");
      return;
    }
  
    // Comprobar si esa moneda ya está en firebase
    const respuesta = await this.coinInFirestore(id, usuarioId);
  
    if (respuesta) {
      return;
    }
  
    // Si no está, agregarla
    await addDoc(collection(this.firestore, 'monedas'), {
      coinId: id,
      userId: usuarioId,
      img:img
    });
  }
  
  async coinInFirestore(id: any, usuarioId: any) {
    const querySnapshot = await getDocs(
      query(collection(this.firestore, 'monedas'), where('coinId', '==', id), where('userId', '==', usuarioId))
    );
  
    return !querySnapshot.empty;
  }

  async borrarMonedaSeguida(id: any, uid: any) {
    try {
      console.log(id, uid)
      // Obtener la referencia del documento que quieres borrar
      const querySnapshot = await getDocs(
        query(collection(this.firestore, 'monedas'), where('coinId', '==', id), where('userId', '==', uid))
      );

      const docRef = querySnapshot.docs[0]?.ref;

      if (docRef) {
        // Borrar el documento
        await deleteDoc(docRef);
      } else {
        console.error('No se encontró un documento para borrar con los criterios proporcionados.');
      }
    } catch (error) {
      console.error('Error al intentar borrar el documento:', error);
    }
  }
}
