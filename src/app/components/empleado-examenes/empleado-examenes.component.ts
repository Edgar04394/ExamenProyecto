import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SearchComponent } from '../../shared/search/search.component';

@Component({
  selector: 'empleado-examenes',
  imports: [CommonModule, SearchComponent],
  templateUrl: './empleado-examenes.component.html',
  styleUrl: './empleado-examenes.component.css',
})
export class EmpleadoExamenesComponent {
  examenes = [
    { id: 1, nombre_examen: 'Analista', estado: 'Pendiente' },
    { id: 2, nombre_examen: 'Desarrollador', estado: 'Terminado' },
    { id: 3, nombre_examen: 'Tester', estado: 'Terminado' },
    { id: 4, nombre_examen: 'Project Manager', estado: 'Pendiente' },
    { id: 5, nombre_examen: 'QA', estado: 'Terminado' },
    { id: 6, nombre_examen: 'Recursos Humanos', estado: 'Pendiente' },
    { id: 7, nombre_examen: 'Director', estado: 'Terminado' },
  ];
}
