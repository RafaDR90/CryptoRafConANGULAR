import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"cryptoraf-75345","appId":"1:698131865787:web:162154028a1104184b099e","storageBucket":"cryptoraf-75345.appspot.com","apiKey":"AIzaSyCoOHOe1i6Nqv3iIxC19i7u0yWb-YG6CT4","authDomain":"cryptoraf-75345.firebaseapp.com","messagingSenderId":"698131865787"}))), importProvidersFrom(provideAuth(() => getAuth()))]
};
