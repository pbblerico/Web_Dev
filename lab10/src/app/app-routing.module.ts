import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompanyDetailComponent} from "./company-detail/company-detail.component";
import {HomeComponent} from "./home/home.component";
import {CompaniesComponent} from "./companies/companies.component";
import {VacancyDetailComponent} from "./vacancy-detail/vacancy-detail.component";
import {AboutComponent} from "./about/about.component";
import {VacanciesComponent} from "./vacancies/vacancies.component";
import {CreateCompanyComponent} from "./create-company/create-company.component";
import {CreateVacancyComponent} from "./create-vacancy/create-vacancy.component";
import {UpdateCompanyComponent} from "./update-company/update-company.component";
import {UpdateVacancyComponent} from "./update-vacancy/update-vacancy.component";

const routes: Routes = [
  {path:'about', component:AboutComponent},
  {path:'companies', component:CompaniesComponent},
  {path:'companies/create', component:CreateCompanyComponent},
  {path:'companies/:id', component:CompanyDetailComponent},
  {path:'companies/:id/update', component:UpdateCompanyComponent},
  {path:'vacancies', component:VacanciesComponent},
  {path:'vacancies/create', component:CreateVacancyComponent},
  {path:'vacancies/:id', component:VacancyDetailComponent},
  {path:'vacancies/:id/update', component:UpdateVacancyComponent},
  {path:'', component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
