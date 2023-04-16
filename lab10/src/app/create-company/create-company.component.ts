import { Component } from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent {
  companyName = ""
  companyCity = ""
  companyAddress = ""
  companyDescription = "";
  constructor(private service: ApiService) {
  }
  createCompany() {
    if (this.companyName.length == 0 || this.companyDescription.length == 0
      || this.companyCity.length == 0 || this.companyAddress.length == 0) {
      alert("Fill all fields")
    }

    this.service.createCompany(this.companyName, this.companyDescription, this.companyCity, this.companyAddress)
      .subscribe((company) => {
        alert("Company " + this.companyName + " created")
        this.companyName = "";
        this.companyDescription = "";
        this.companyAddress = "";
        this.companyCity = "";
      })
  }
}
