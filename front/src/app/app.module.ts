import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './core/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { ExperienciasComponent } from './pages/experiencias/experiencias.component';
import { LoginComponent } from './pages/login/login.component';
import { ExperienceDetailComponent } from './pages/experiencias/experience-detail/experience-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './pages/registro/registro.component';
import { ComoFuncionaComponent } from './pages/como-funciona/como-funciona.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { RouterModule } from '@angular/router';
import { ReservasComponent } from './pages/perfil-usuario/reservas/reservas.component';
import { PagosComponent } from './pages/pagos/pagos.component';
import { PagosFormComponent } from './components/pagos-form/pagos-form.component';
import { ExperienciasAnfitrionComponent } from './pages/perfil-usuario/experiencias-anfitrion/experiencias-anfitrion.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    HeaderComponent,
    CarritoComponent,
    ExperienciasComponent,
    LoginComponent,
    RegisterComponent,
    ExperienceDetailComponent,
    ComoFuncionaComponent,
    ContactoComponent,
    FooterComponent,
    CarrouselComponent,
    ReservasComponent,
    PagosComponent,
    PagosFormComponent,
    ExperienciasAnfitrionComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
