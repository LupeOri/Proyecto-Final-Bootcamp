import { ReservasComponent } from './pages/perfil-usuario/reservas/reservas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienciasComponent } from './pages/experiencias/experiencias.component';
import { ExperienceDetailComponent } from './pages/experiencias/experience-detail/experience-detail.component';
import { RegisterComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { ComoFuncionaComponent } from './pages/como-funciona/como-funciona.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ExperienciasAnfitrionComponent } from './pages/perfil-usuario/experiencias-anfitrion/experiencias-anfitrion.component';
import { TokenGuard } from './guards/token.guard';
import { HomeComponent } from './components/home/home.component';
import { PagosComponent } from './pages/pagos/pagos.component';
import { PagosFormComponent } from './components/pagos-form/pagos-form.component';

const routes: Routes = [
{
  path: "", component: HomeComponent
},
{
  path: 'pagos/:id',
  component: PagosComponent,
  canActivate: [TokenGuard] 
},
{
  path: "comofunciona", component: ComoFuncionaComponent
},
{
  path: "experiencias", component: ExperienciasComponent
},
{
path: "experiencias/:id", component: ExperienceDetailComponent
},
{
  path: "myexperiencias", component: ExperienciasAnfitrionComponent, canActivate:[TokenGuard]
},
{
  path: "contacto", component: ContactoComponent
},
{
  path: "registro", component: RegisterComponent
},
{
  path: "login", component: LoginComponent
},
{
  path: "myreservas", component: ReservasComponent, canActivate:[TokenGuard]
},
{
  path: "myreservas/pago", component: PagosFormComponent, canActivate:[TokenGuard]
},
// {
//   path: "404", component:
// },
{
  path: "**", redirectTo: ""
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
