import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";
import {Company} from "../models";
import { Location } from '@angular/common';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit{
  constructor(private service: ApiService, private location: Location) {
  }

  companyList: Company[]=[];

  ngOnInit(): void {
    this.refreshCompanyList();
  }

  goBackToPrevPage() {
    this.location.back();
  }

  deleteCompany(companyId: number): void {
    if(confirm("Are you sure you want delete this company?"))
      this.service.deleteCompany(companyId).subscribe((data) => {
        this.companyList = this.companyList.filter((company) => company.id !== companyId);
      });
  }
  //
  updateId(id: number) {
    this.companyList.filter(a => a.id >= id).map(a => a.id--);
  }

  refreshCompanyList() {
    this.service.getCompanyList().subscribe((data)=> {
      this.companyList = data;
    })
  }

}
