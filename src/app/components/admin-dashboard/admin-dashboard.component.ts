import { Component, NgModule } from '@angular/core';
import { TopbarComponent } from '../../shared/topbar/topbar.component';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from "../../shared/sidebar/sidebar.component";
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'admin-dashboard',
  standalone: true,
  imports: [TopbarComponent, SidebarComponent, FooterComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
})


export class AdminDashboardComponent { }
