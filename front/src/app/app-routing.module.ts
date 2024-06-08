import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ExperienciasComponent } from './pages/experiencias/experiencias.component';
import { ExperienceDetailComponent } from './pages/experiencias/experience-detail/experience-detail.component';

const routes: Routes = [
{
  path: "", component: HomeComponent
},
{
  path: "experiencias", component: ExperienciasComponent
},
{
path: "experiencias/:id", component: ExperienceDetailComponent
},
// {
// path: "experiencias/:id", component: ExperienceDetailComponent
// },
// {
//   path: "contact", component:
// },
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
