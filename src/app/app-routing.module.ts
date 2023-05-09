import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Components created on page
import { HomeComponent } from './home/home.component';
//import { ContactMeComponent } from './contact-me/contact-me.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  /*
  {
    path: 'contact-me',
    component: ContactMeComponent
  },
  */
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
