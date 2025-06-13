import { Component } from '@angular/core';
import { SidebarComponent } from "../../shared/sidebar/sidebar.component";
import { TopbarComponent } from "../../shared/topbar/topbar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'empleados',
  standalone: true,
  imports: [SidebarComponent, TopbarComponent, CommonModule],
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css',
})

export class EmpleadosComponent { }
