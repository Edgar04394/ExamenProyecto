import { Component } from '@angular/core';
import { SidebarComponent } from "../../shared/sidebar/sidebar.component";
import { TopbarComponent } from "../../shared/topbar/topbar.component";
import { FooterComponent } from '../../shared/footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'puestos',
  imports: [RouterModule],
  templateUrl: './puestos.component.html',
  styleUrl: './puestos.component.css',
})
export class PuestosComponent { }
