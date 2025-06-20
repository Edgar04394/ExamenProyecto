import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../../shared/search/search.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'admin-empleados',
  imports: [CommonModule, SearchComponent, RouterModule],
  templateUrl: './admin-empleados.component.html',
  styleUrl: './admin-empleados.component.css',
})
export class AdminEmpleadosComponent {
  empleados = [
    { id: 1, nombre: 'Edgar', apellidoPaterno: 'Leal', apellidoMaterno: 'Duarte', fechaNacimiento: '2003-04-06', fechaInicio: '2025-05-12', puesto: '01' },
    { id: 2, nombre: 'Edgar', apellidoPaterno: 'Leal', apellidoMaterno: 'Duarte', fechaNacimiento: '2003-04-06', fechaInicio: '2025-05-12', puesto: '02' },
    // Puedes llenar más datos aquí o traerlos desde un servicio
  ];
}
