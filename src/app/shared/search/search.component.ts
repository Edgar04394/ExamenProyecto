import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search',
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  @Output() agregar = new EventEmitter();

  agregarEmpleado() {
    this.agregar.emit();
  }
}
