import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './core/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { ExperienciasComponent } from './pages/experiencias/experiencias.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { PerfilUsuarioComponent } from './pages/perfil-usuario/perfil-usuario.component';
import { ExperienciaDetailComponent } from './pages/experiencias/experiencia-detail/experiencia-detail.component';
import { ExperienciaFormComponent } from './pages/experiencias/experiencia-form/experiencia-form.component';
import { ReservasComponent } from './pages/perfil-usuario/reservas/reservas.component';
import { ValoracionesComponent } from './pages/perfil-usuario/valoraciones/valoraciones.component';
import { ExperienciasAnfitrionComponent } from './pages/perfil-usuario/experiencias-anfitrion/experiencias-anfitrion.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    ExperienciasComponent,
    CarritoComponent,
    RegistroComponent,
    LoginComponent,
    PerfilUsuarioComponent,
    ExperienciaDetailComponent,
    ExperienciaFormComponent,
    ReservasComponent,
    ValoracionesComponent,
    ExperienciasAnfitrionComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
