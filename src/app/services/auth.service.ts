import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:5054/api/Auth';

  constructor(private http: HttpClient, private router: Router) { }

  login(usuario: string, contrasena: string) {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, { usuario, contrasena });
  }

  handleLoginResponse(token: string) {
    localStorage.setItem('token', token);

    const decoded: any = jwtDecode(token);
    const rol = decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];

    if (rol === 'Administrador') {
      this.router.navigate(['/admin-dashboard']);
    } else if (rol === 'Empleado') {
      this.router.navigate(['/empleado-dashboard']);
    }
  }

}
