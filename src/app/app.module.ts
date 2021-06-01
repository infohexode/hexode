import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ArticleListsComponent } from './article-lists/article-lists.component';
import { AboutComponent } from './about/about.component';
import { ArticleComponent } from './article/article.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './Home/Home.component';
import { LeadsComponent } from './leads/leads.component';
import { LeadComponent } from './lead/lead.component';
import { LeadAddComponent } from './LeadAdd/LeadAdd.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [							
    AppComponent,
    NavBarComponent,
    FooterComponent,
    ArticleListsComponent,
    AboutComponent,
      ArticleComponent,
      NotFoundComponent,
      HomeComponent,
      LeadsComponent,
      LeadComponent,
      LeadAddComponent,
      LoginComponent
   ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
