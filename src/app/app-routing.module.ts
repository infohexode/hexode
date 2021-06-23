import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

import { LeadsComponent } from './leads/leads.component';
import { LeadAddComponent } from './LeadAdd/LeadAdd.component';


import { LeadComponent } from './lead/lead.component';
import { HomeComponent } from './Home/Home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  
  { path: 'leads', component: LeadsComponent },
  { path: 'addleads', component: LeadAddComponent },
  { path: 'about', component: AboutComponent },
  { path: '404', component: NotFoundComponent },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'lead/:id', component: LeadComponent },
    { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
