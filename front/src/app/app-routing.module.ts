import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
{
  path: "", component: HomeComponent
},
// {
//   path: "experiencias", component:
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
