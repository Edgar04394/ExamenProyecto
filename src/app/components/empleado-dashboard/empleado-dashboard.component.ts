import { Component } from '@angular/core';
import { SidebarComponent } from "../../shared/sidebar/sidebar.component";
import { RouterOutlet } from '@angular/router';
import { TopbarComponent } from "../../shared/topbar/topbar.component";

@Component({
  selector: 'empleado-dashboard',
  imports: [RouterOutlet, SidebarComponent, TopbarComponent],
  templateUrl: './empleado-dashboard.component.html',
  styleUrl: './empleado-dashboard.component.css',
})
export class EmpleadoDashboardComponent { }
