import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { CreateVacancyComponent } from './create-vacancy/create-vacancy.component';
import { HomeComponent } from './home/home.component';
import { UpdateCompanyComponent } from './update-company/update-company.component';
import { UpdateVacancyComponent } from './update-vacancy/update-vacancy.component';
import { VacanciesComponent } from './vacancies/vacancies.component';
import { VacancyDetailComponent } from './vacancy-detail/vacancy-detail.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CompaniesComponent,
    CompanyDetailComponent,
    CreateCompanyComponent,
    CreateVacancyComponent,
    HomeComponent,
    UpdateCompanyComponent,
    UpdateVacancyComponent,
    VacanciesComponent,
    VacancyDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
