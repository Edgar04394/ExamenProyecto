import { Component } from '@angular/core';
import { SearchComponent } from '../../shared/search/search.component';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'admin-examenes',
  imports: [SearchComponent, NgFor, CommonModule],
  templateUrl: './admin-examenes.component.html',
  styleUrl: './admin-examenes.component.css',
})

export class AdminExamenesComponent {
  examenes = [
    { examen: 'Examen', num_preguntas: '10', tiempo_limite: '01:00:00' },
    { examen: 'Examen', num_preguntas: '10', tiempo_limite: '01:00:00' },
    { examen: 'Examen', num_preguntas: '10', tiempo_limite: '01:00:00' },
    { examen: 'Examen', num_preguntas: '10', tiempo_limite: '01:00:00' },
    { examen: 'Examen', num_preguntas: '10', tiempo_limite: '01:00:00' },
  ];
}
