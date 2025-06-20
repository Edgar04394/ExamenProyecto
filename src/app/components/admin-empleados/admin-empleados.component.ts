import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../../shared/search/search.component';
import { RouterModule } from '@angular/router';
import { EmpleadoModalComponent } from '../empleado-modal/empleado-modal.component';
import { Empleado } from '../../models/empleado';
import { EmpleadoService } from '../../services/empleado.service';


@Component({
  selector: 'admin-empleados',
  imports: [CommonModule, SearchComponent, RouterModule, EmpleadoModalComponent],
  templateUrl: './admin-empleados.component.html',
  styleUrl: './admin-empleados.component.css',
})
export class AdminEmpleadosComponent {
  empleados: Empleado[] = [];
  modalVisible = false;

  constructor(private empleadoService: EmpleadoService) {}

  ngOnInit(): void {
    this.cargarEmpleados();
  }

  cargarEmpleados() {
    this.empleadoService.obtenerEmpleados().subscribe({
      next: (data) => this.empleados = data,
      error: (err) => console.error('Error al cargar empleados', err)
    });
  }

  abrirModal() {
    this.modalVisible = true;
  }

  cerrarModal() {
    this.modalVisible = false;
  }

  agregarEmpleado(nuevo: Empleado) {
    this.empleadoService.crearEmpleado(nuevo).subscribe({
      next: () => {
        this.cerrarModal();
        this.cargarEmpleados();
      },
      error: (err) => console.error('Error al agregar empleado', err)
    });
  }

}
