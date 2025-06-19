import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { SearchComponent } from '../../shared/search/search.component';

@Component({
  selector: 'admin-clasificaciones',
  standalone: true,
  imports: [CommonModule, NgFor, SearchComponent],
  templateUrl: './admin-clasificaciones.component.html',
  styleUrl: './admin-clasificaciones.component.css',
})
export class AdminClasificacionesComponent {
  clasificaciones = [
    { clasificacion: 'Determinación', color: 'Rojo' },
    { clasificacion: 'Creatividad', color: 'Naranja' },
    { clasificacion: 'Neutro', color: 'Blanco' },
    { clasificacion: 'Hermetismo', color: 'Verde' },
    { clasificacion: 'Orientación al detalle', color: 'Azul' },
  ];
}
