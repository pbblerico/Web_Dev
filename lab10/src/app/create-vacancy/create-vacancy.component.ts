import {Component, OnInit} from '@angular/core';
import {Company} from "../models";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-create-vacancy',
  templateUrl: './create-vacancy.component.html',
  styleUrls: ['./create-vacancy.component.css']
})
export class CreateVacancyComponent implements OnInit{
  vacancyName = "";
  vacancyDescription = "";
  vacancySalary = 0;
  companyId = 0;

  companyList: Company[] = []
  constructor(private service: ApiService) {
  }

  ngOnInit(): void {
    this.service.getCompanyList().subscribe((data) => {
      this.companyList = data;
    })
  }

  createVacancy() {
    if (this.vacancyName.length == 0 || this.vacancyDescription.length == 0
      || this.vacancySalary == 0 || this.companyId == 0) {
      alert("Fill all fields")
    }

    this.service.createVacancy(this.vacancyName, this.vacancyDescription, this.vacancySalary, this.companyId)
      .subscribe((vacancy) => {
        alert("Vacancy " + this.vacancyName + " created")
        this.vacancyName = "";
        this.vacancyDescription = "";
        this.vacancySalary = 0;
        this.companyId = 0;
      })
  }
}
