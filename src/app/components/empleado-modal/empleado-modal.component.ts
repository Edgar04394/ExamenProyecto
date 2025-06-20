import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'empleado-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './empleado-modal.component.html',
  styleUrls: ['./empleado-modal.component.css']
})
export class EmpleadoModalComponent {
  @Input() visible = false;
  @Output() cerrar = new EventEmitter();
  @Output() guardar = new EventEmitter<any>();

  empleado = {
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    fechaNacimiento: '',
    fechaInicioContrato: '',
    puesto: ''
  };

  puestos = [
    { id: '01', nombre: 'Gerente' },
    { id: '02', nombre: 'Supervisor' },
    { id: '03', nombre: 'Operador' }
  ];

  cerrarModal() {
    this.visible = false;
    this.cerrar.emit();
  }

  guardarEmpleado() {
    if (
      this.empleado.nombre &&
      this.empleado.apellidoPaterno &&
      this.empleado.apellidoMaterno &&
      this.empleado.fechaNacimiento &&
      this.empleado.fechaInicioContrato &&
      this.empleado.puesto
    ) {
      this.guardar.emit(this.empleado);
      this.cerrarModal();
    } else {
      alert('Por favor, completa todos los campos.');
    }
  }

}
