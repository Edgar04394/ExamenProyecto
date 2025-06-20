import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private apiUrl = 'http://localhost:5054/api/Empleados';

  constructor(private http: HttpClient) { }

  obtenerEmpleados(): Observable<Empleado[]> {
    return this.http.post<Empleado[]>(`${this.apiUrl}/visualizarEmpleado`, {});
  }

  crearEmpleado(empleado: Empleado): Observable<any> {
    return this.http.post(`${this.apiUrl}/CrearEmpleado`, empleado);
  }

  actualizarEmpleado(empleado: Empleado): Observable<any> {
    return this.http.post(`${this.apiUrl}/ActualizarEmpleado/${empleado.codigoEmpleado}`, empleado);
  }

  eliminarEmpleado(codigoEmpleado: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/EliminarEmpleado/${codigoEmpleado}`, {});
  }
}
