import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { PuestosComponent } from './components/puestos/puestos.component';
import { ExamenesComponent } from './components/examenes/examenes.component';
import { ClasificacionesComponent } from './components/clasificaciones/clasificaciones.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // ruta raíz redirige a login 
  { path: 'dashboard', component: AdminDashboardComponent },
  { path: 'empleados', component: EmpleadosComponent},
  { path: 'puestos', component: PuestosComponent},
  { path: 'clasificaciones', component: ClasificacionesComponent},
  { path: 'examenes', component: ExamenesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }