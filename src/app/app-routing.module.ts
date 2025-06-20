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
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';
import { EmpleadoExamenesComponent } from './components/empleado-examenes/empleado-examenes.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent, data: { currentTitle: 'Inicio de sesión' } },
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  {
    path: '',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { expectedRole: 'Administrador' },
    children: [
      { path: 'admin-dashboard', component: BienvenidaAdminComponent },
      { path: 'admin-empleados', component: AdminEmpleadosComponent },
      { path: 'admin-puestos', component: AdminPuestosComponent },
      { path: 'admin-clasificaciones', component: AdminClasificacionesComponent },
      { path: 'admin-examenes', component: AdminExamenesComponent }
    ]
  },
  {
    path: '',
    component: EmpleadoDashboardComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { expectedRole: 'Empleado' },
    children: [
      { path: 'empleado-dashboard', component: BienvenidaEmpleadoComponent },
      { path: 'empleado-examenes', component:  EmpleadoExamenesComponent },
    ]
  }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
