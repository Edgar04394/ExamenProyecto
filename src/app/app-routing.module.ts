import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { EmpleadoDashboardComponent } from './components/empleado-dashboard/empleado-dashboard.component';
import { BienvenidaAdminComponent } from './components/bienvenida-admin/bienvenida-admin.component';
import { BienvenidaEmpleadoComponent } from './components/bienvenida-empleado/bienvenida-empleado.component';
import { AdminEmpleadosComponent } from './components/admin-empleados/admin-empleados.component';
import { AdminClasificacionesComponent } from './components/admin-clasificaciones/admin-clasificaciones.component';
import { AdminPuestosComponent } from './components/admin-puestos/admin-puestos.component';
import { AdminExamenesComponent } from './components/admin-examenes/admin-examenes.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, data: { currentTitle: 'Inicio de sesión' } },
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      { path: 'admin-dashboard', component: BienvenidaAdminComponent, data: { currentTitle: 'Panel Principal' } },
      { path: 'admin-empleados', component: AdminEmpleadosComponent, data: { currentTitle: 'Catálogo de Empleados' } },
      { path: 'admin-puestos', component: AdminPuestosComponent, data: { currentTitle: 'Catálogo de Puestos' } },
      { path: 'admin-clasificaciones', component: AdminClasificacionesComponent, data: { currentTitle: 'Catálogo de Clasificaciones' } },
      { path: 'admin-examenes', component: AdminExamenesComponent, data: { currentTitle: 'Catálogo de Exámenes' } }
    ]
  },

  {
    path: '',
    component: EmpleadoDashboardComponent,
    children: [
      { path: 'empleado-dashboard', component: BienvenidaEmpleadoComponent, data: { currentTitle: 'Panel Principal' } }
    ]
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
