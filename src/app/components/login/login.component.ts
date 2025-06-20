import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {
  usuario = '';
  contrasena = '';

  constructor(private authService: AuthService) {}

  onLogin() {
    this.authService.login(this.usuario, this.contrasena).subscribe({
      next: (response: any) => {
        console.log('Token recibido:', response.token);
        this.authService.handleLoginResponse(response.token);
      },
      error: err => {
        console.error('Error en login:', err);
        alert('Usuario o contraseña incorrectos.');
      }
    });
  }
}