import { Component } from '@angular/core';
import { UsuarioServiceService } from '../usuario-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vista-monedas',
  standalone: true,
  imports: [],
  templateUrl: './vista-monedas.component.html',
  styleUrl: './vista-monedas.component.css'
})
export class VistaMonedasComponent {
  constructor(private usuarioService: UsuarioServiceService, private router: Router) { }

  ngOnInit(): void {
    if (this.usuarioService.user.uid == null) {
      this.router.navigate(['/']);
    }
  }

}
