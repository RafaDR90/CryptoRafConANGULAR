import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsuarioServiceService } from '../usuario-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public user:any = {};
  constructor(public usuarioService:UsuarioServiceService) { }

  public login(){
    this.usuarioService.login(this.user)
  }

  public loginWithGmail(){
    this.usuarioService.loginGoogle()
  }
  public registerGitHub(){
    this.usuarioService.loginGitHub()
  }
}
