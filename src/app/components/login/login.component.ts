import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  usuario: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    // Simulación del login; normalmente usarías un AuthService
    // Aquí puedes sustituirlo por tu API real
    if (this.usuario === 'admin' && this.password === 'admin123') {
      localStorage.setItem('rol', 'admin');
      this.router.navigate(['/dashboard']);
    } else if (this.usuario === 'empleado' && this.password === 'empleado123') {
      localStorage.setItem('rol', 'empleado');
      this.router.navigate(['/empleado-dashboard']);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }
}
