import {Component, OnInit} from '@angular/core';
import {Company, Vacancy} from "../models";
import {ApiService} from "../api.service";
import {ActivatedRoute} from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit{
  company: Company;
  id = 0;
  vacancies: Vacancy[] = []
  loaded: boolean;
  constructor(private service: ApiService, private root: ActivatedRoute, private location: Location) {
    this.company = {} as Company;
    this.loaded = false;
  }

  goBackToPrevPage() {
    this.location.back();
  }

  ngOnInit(): void {
    this.loadCompany()
    this.loadVacancies()
  }

  loadCompany() {
    this.root.paramMap.subscribe((params) => {
      let _id = params.get('id');
      if(_id) {
        this.id = +_id;
        this.service.getCompanyById(this.id).subscribe((company) => {
          this.company = company;
          this.loaded = true;
          this.id = company.id;
        })
      }
    });
  }

  deleteVacancy(vacancyId: number): void {
    if(confirm("Are you sure you want delete this company?"))
      this.service.deleteVacancy(vacancyId).subscribe((data) => {
        this.vacancies = this.vacancies.filter((vacancy) => vacancy.id !== vacancyId);
      });
  }

  private loadVacancies() {
    this.service.getCompanyVacancies(this.id).subscribe((data) => {
      this.vacancies = data;
    })
  }

}
