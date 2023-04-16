import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Company, Vacancy} from "./models";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  readonly apiURL = `http://127.0.0.1:8000`;

  constructor(private http: HttpClient) { }

  getCompanyList(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.apiURL}/api/companies/`);
  }

  getCompanyById(id: number): Observable<Company> {
    return this.http.get<Company>(`${this.apiURL}/api/companies/${id}/`)
  }

  getVacancyById(id: number): Observable<Vacancy> {
    return this.http.get<Vacancy>(`${this.apiURL}/api/vacancies/${id}/`)
  }

  createCompany(companyName: string, companyDescription: string, companyCity: string, companyAddress: string): Observable<Company> {
    return this.http.post<Company>(
      `${this.apiURL}/api/companies/`,
      {
        name: companyName,
        description: companyDescription,
        city: companyCity,
        address: companyAddress
      }
    );
  }

  updateCompany(id: number, companyName: string, companyDescription: string, companyCity: string, companyAddress: string): Observable<Company> {
    return this.http.put<Company>(`${this.apiURL}/api/companies/${id}/`,
      {
        name: companyName,
        description: companyDescription,
        city: companyCity,
        address: companyAddress
      });
  }

  deleteCompany(id: number): Observable<any> {
    return this.http.delete(`${this.apiURL}/api/companies/${id}/`);
  }

  getCompanyVacancies(id: number): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.apiURL}/api/companies/${id}/vacancies/`)
  }

  getVacancyList(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.apiURL}/api/vacancies/`)
  }

  createVacancy(vacancyName: string, vacancyDescription: string, vacancySalary: number, companyId: number): Observable<Vacancy> {
    return this.http.post<Vacancy>(
      `${this.apiURL}/api/vacancies/`,
      {
        name: vacancyName,
        description: vacancyDescription,
        salary: vacancySalary,
        company: companyId
      }
    );
  }

  updateVacancy(id: number, vacancyName: string, vacancyDescription: string, vacancySalary: number, companyId: number): Observable<Vacancy> {
    return this.http.put<Vacancy>(`${this.apiURL}/api/vacancies/${id}/`,
      {
        name: vacancyName,
        description: vacancyDescription,
        salary: vacancySalary,
        company: companyId
      });
  }

  deleteVacancy(id: number): Observable<any> {
    return this.http.delete(`${this.apiURL}/api/vacancies/${id}/`);
  }
}
