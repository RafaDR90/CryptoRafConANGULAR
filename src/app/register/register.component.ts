import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsuarioServiceService } from '../usuario-service.service';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  public user:any = {};
  constructor(public usuarioService:UsuarioServiceService) { }
  
   /* Cuando inicia el componente hace lo siguiente */ 
  ngOnInit(){
    /* Le da el valor de currentEmail a user.email, esto es por si viene de Home con un email */ 
    this.usuarioService.currentEmail.subscribe(email=>this.user.email=email);
  }
  /* Cuando salgo del componente vacia el email */
  ngOnDestroy(){
    this.usuarioService.setEmail("");
  }

  
  public register(){
    this.usuarioService.register(this.user)
  }

  public registerGoogle(){
    this.usuarioService.loginGoogle()
  }

  public registerGitHub(){
    this.usuarioService.loginGitHub()
  }
}
