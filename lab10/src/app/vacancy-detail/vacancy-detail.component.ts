import {Component, OnInit} from '@angular/core';
import {Company, Vacancy} from "../models";
import {ApiService} from "../api.service";
import {ActivatedRoute} from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: 'app-vacancy-detail',
  templateUrl: './vacancy-detail.component.html',
  styleUrls: ['./vacancy-detail.component.css']
})
export class VacancyDetailComponent implements OnInit{
  vacancy: Vacancy;
  id = 0;
  company: Company;
  loaded: boolean;

  constructor(private service: ApiService, private root: ActivatedRoute, private location: Location) {
    this.vacancy = {} as Vacancy;
    this.loaded = false;
    this.company = {} as Company
  }

  goBackToPrevPage() {
    this.location.back();
  }

  ngOnInit(): void {
    this.loadVacancy();

  }

  loadVacancy() {
    this.root.paramMap.subscribe((params) => {
      let _id = params.get('id');
      if(_id) {
        this.id = +_id;
        this.service.getVacancyById(this.id).subscribe((vacancy) => {
          this.vacancy = vacancy;
          this.loaded = true;
          this.id = vacancy.id;

          this.service.getCompanyById(vacancy.company).subscribe((comp) => {
              this.company = comp;
          })
        })
      }
    });
  }
}
