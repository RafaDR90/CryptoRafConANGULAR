import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UsuarioServiceService } from '../usuario-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private router: Router, private usuarioService:UsuarioServiceService) { }

  get isUserAuthenticated(): boolean {
    return !!this.usuarioService.user.uid; // Verifica si hay un usuario autenticado
  }

  
  logOut() {
    this.usuarioService.logout()
  }
  
}
