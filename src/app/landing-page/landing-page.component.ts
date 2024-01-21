import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsuarioServiceService } from '../usuario-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  contenidoInput = '';
  constructor(private Router: Router, private UsuarioService:UsuarioServiceService) { }

  ngOnInit(){
    this.contenidoInput='';
  }


  showRegister(){
    this.UsuarioService.setEmail(this.contenidoInput);
    this.Router.navigate(['/register']);
  }
}
