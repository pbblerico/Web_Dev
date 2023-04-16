import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {Company, Vacancy} from "../models";

@Component({
  selector: 'app-update-vacancy',
  templateUrl: './update-vacancy.component.html',
  styleUrls: ['./update-vacancy.component.css']
})
export class UpdateVacancyComponent implements OnInit{
  vacancyName = "";
  vacancyDescription = "";
  vacancySalary = 0;
  companyId = 0;

  id = 0;
  companyList: Company[] = []

  constructor(private service: ApiService, private root: ActivatedRoute, private location: Location) {
  }

  ngOnInit(): void {
    this.service.getCompanyList().subscribe((data) => {
      this.companyList = data;
    })
    this.loadVacancy();
  }

  goBackToPrevPage() {
    this.location.back();
  }

  loadVacancy() {
    this.root.paramMap.subscribe((params) => {
      let _id = params.get('id');
      if(_id) {
        this.id = +_id;
        this.service.getVacancyById(this.id).subscribe((vacancy) => {
          this.setInputs(vacancy);
        })
      }
    });
  }

  setInputs(vacancy: Vacancy) {
    this.id = vacancy.id;
    this.vacancyName = vacancy.name;
    this.vacancyDescription = vacancy.description;
    this.vacancySalary = vacancy.salary;
    this.companyId = vacancy.company;
  }


  updateVacancy() {
    if(confirm("Are you sure you want update this vacancy?"))
      this.service.updateVacancy(this.id, this.vacancyName, this.vacancyDescription, this.vacancySalary, this.companyId)
        .subscribe((vacancy) => {
          this.service.getVacancyById(this.id).subscribe((vacancy) => {
            this.setInputs(vacancy);
          })
        })
  }
}
