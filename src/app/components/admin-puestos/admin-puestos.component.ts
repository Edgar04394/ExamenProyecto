import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchComponent } from '../../shared/search/search.component';

@Component({
  selector: 'admin-puestos',
  imports: [RouterModule, CommonModule, SearchComponent],
  templateUrl: './admin-puestos.component.html',
  styleUrl: './admin-puestos.component.css',
})

export class AdminPuestosComponent { 
  puestos = [
    { puesto: 'Desarrollador Frontend' },
    { puesto: 'Desarrollador Backend' },
    { puesto: 'Analista de Sistemas' },
    { puesto: 'Administrador de Base de Datos' },
    { puesto: 'Diseñador UX/UI' },
    { puesto: 'Ingeniero DevOps' },
    { puesto: 'Scrum Master' },
    { puesto: 'Project Manager' },
    { puesto: 'Tester QA' },
    { puesto: 'Soporte Técnico' },
  ];
}
