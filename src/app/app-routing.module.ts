import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';// <-- asegúrate de importar
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { PuestosComponent } from './components/puestos/puestos.component';
import { ExamenesComponent } from './components/examenes/examenes.component';
import { ClasificacionesComponent } from './components/clasificaciones/clasificaciones.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { EmpleadoDashboardComponent } from './components/empleado-dashboard/empleado-dashboard.component';
import { BienvenidaAdminComponent } from './components/bienvenida-admin/bienvenida-admin.component';
import { BienvenidaEmpleadoComponent } from './components/bienvenida-empleado/bienvenida-empleado.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, data: { currentTitle: 'Inicio de sesión' } },
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      { path: 'admin-dashboard', component: BienvenidaAdminComponent, data: { currentTitle: 'Panel Principal' } },
      { path: 'admin-empleados', component: EmpleadosComponent, data: { currentTitle: 'Catálogo de Empleados' } },
      { path: 'admin-puestos', component: PuestosComponent, data: { currentTitle: 'Catálogo de Puestos' } },
      { path: 'admin-clasificaciones', component: ClasificacionesComponent, data: { currentTitle: 'Clasificaciones' } },
      { path: 'admin-examenes', component: ExamenesComponent, data: { currentTitle: 'Exámenes' } }
    ]
  },

  {
    path: '',
    component: EmpleadoDashboardComponent,
    children: [
      { path: 'empleado-dashboard', component: BienvenidaEmpleadoComponent, data: { currentTitle: 'Inicio del Empleado' } }
    ]
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
