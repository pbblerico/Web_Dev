import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";
import {ActivatedRoute} from "@angular/router";
import {CompaniesComponent} from "../companies/companies.component";
import {Company} from "../models";
import { Location } from '@angular/common';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit{
  companyName = "";
  companyCity = "";
  companyAddress = "";
  companyDescription = "";
  id = 0;

  constructor(private service: ApiService, private root: ActivatedRoute, private location: Location) {
  }

  ngOnInit(): void {
    this.loadCompany();
  }

  goBackToPrevPage() {
    this.location.back();
  }

  loadCompany() {
    this.root.paramMap.subscribe((params) => {
      let _id = params.get('id');
      if(_id) {
        this.id = +_id;
        this.service.getCompanyById(this.id).subscribe((company) => {
          this.setInputs(company);
        })
      }
    });
  }

  setInputs(company: Company) {
    this.id = company.id;
    this.companyName = company.name;
    this.companyDescription = company.description;
    this.companyCity = company.city;
    this.companyAddress = company.address;
  }
  updateCompany() {
    if(confirm("Are you sure you want update this company?"))
      this.service.updateCompany(this.id, this.companyName, this.companyDescription, this.companyCity, this.companyAddress)
        .subscribe((company) => {
          this.service.getCompanyById(this.id).subscribe((company) => {
            this.setInputs(company);
          })
        })
  }
}
