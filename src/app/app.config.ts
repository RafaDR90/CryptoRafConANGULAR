import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withComponentInputBinding()), 
    importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"cryptoraf-75345","appId":"1:698131865787:web:162154028a1104184b099e","storageBucket":"cryptoraf-75345.appspot.com","apiKey":"AIzaSyCoOHOe1i6Nqv3iIxC19i7u0yWb-YG6CT4","authDomain":"cryptoraf-75345.firebaseapp.com","messagingSenderId":"698131865787"}))), importProvidersFrom(provideAuth(() => getAuth())), 
    importProvidersFrom(HttpClientModule), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"cryptoraf-75345","appId":"1:698131865787:web:162154028a1104184b099e","storageBucket":"cryptoraf-75345.appspot.com","apiKey":"AIzaSyCoOHOe1i6Nqv3iIxC19i7u0yWb-YG6CT4","authDomain":"cryptoraf-75345.firebaseapp.com","messagingSenderId":"698131865787"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"cryptoraf-75345","appId":"1:698131865787:web:162154028a1104184b099e","storageBucket":"cryptoraf-75345.appspot.com","apiKey":"AIzaSyCoOHOe1i6Nqv3iIxC19i7u0yWb-YG6CT4","authDomain":"cryptoraf-75345.firebaseapp.com","messagingSenderId":"698131865787"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
