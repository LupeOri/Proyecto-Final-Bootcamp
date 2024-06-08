import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavComponent } from './core/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { ExperienciasComponent } from './pages/experiencias/experiencias.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ExperienceDetailComponent } from './pages/experiencias/experience-detail/experience-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    HeaderComponent,
    CarritoComponent,
    ExperienciasComponent,
    LoginComponent,
    RegistroComponent,
    ExperienceDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule	
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
