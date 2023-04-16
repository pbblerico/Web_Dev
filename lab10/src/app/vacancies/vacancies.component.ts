import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";
import {Vacancy} from "../models";
import { Location } from '@angular/common';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent implements OnInit{
  constructor(private service: ApiService, private location: Location) {
  }
  goBackToPrevPage() {
    this.location.back();
  }
  vacancyList: Vacancy[]=[];

  ngOnInit(): void {
    this.refreshVacancyList();
  }

  refreshVacancyList() {
    this.service.getVacancyList().subscribe((data)=> {
      this.vacancyList = data;
    })
  }

  deleteVacancy(id: number) {
    if(confirm("Are you sure you want delete this vacancy?"))
      this.service.deleteVacancy(id).subscribe((data) => {
        this.vacancyList = this.vacancyList.filter((vacancy) => vacancy.id !== id);
      });
  }
}
