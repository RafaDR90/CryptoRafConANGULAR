import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioServiceService } from '../usuario-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private router: Router, private usuarioService:UsuarioServiceService) { }

  get isUserAuthenticated(): boolean {
    return !!this.usuarioService.user.uid; // Verifica si hay un usuario autenticado
  }

  showRegister() {
    this.router.navigate(['/register']);
  }
  showLogin() {
    this.router.navigate(['/login']);
  }

  showLandingPage() {
    this.router.navigate(['/']);
  }
  logOut() {
    this.usuarioService.logout()
  }
  showCoins() {
    this.router.navigate(['/coins']);
  }
}
