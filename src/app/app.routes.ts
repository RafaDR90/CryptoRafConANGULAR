import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { VistaMonedasComponent } from './vista-monedas/vista-monedas.component';
import { VistaDetalleComponent } from './vista-detalle/vista-detalle.component';
import { authenticationGuard } from './authentication.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'landing-page', pathMatch: 'full' },
    { path: 'landing-page', component: LandingPageComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    //TERMINAR ESTO TERMINAR ESTO TERMINAR ESTO TERMINAR ESTO TERMINAR ESTO TERMINAR ESTO TERMINAR ESTO 
    { path: 'coins', component: VistaMonedasComponent, canActivate: [authenticationGuard]},
    { path: 'coins/:id', component: VistaDetalleComponent, canActivate: [authenticationGuard]}
];
