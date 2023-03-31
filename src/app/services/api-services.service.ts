import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReportData, UserLists } from '../report-data.model';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  baseUrl: string = "http://localhost/OES-Angular-app/Angular-CRUD/apiConnection";
  reportData!: ReportData[];
  userLists!: UserLists[];

  constructor(private httpClient: HttpClient) {}

  addReport(date_entry:any, facilitator:any, title:any, type_beneficiary:any, 
            count_male:any, count_female:any, poor_rate:any, fair_rate: any,
            satisfactory_rate:any, verysatisfactory_rate:any, excellent_rate:any, duration:any,
            serviceOpt:any, partners:any, fac_staff:any, role:any, cost_fund:any): Observable <any>{
              return this.httpClient.post<ReportData[]>(this.baseUrl + '/fill_form.php', 
                {
                  date_entry, facilitator, title, type_beneficiary, count_male, count_female, poor_rate, fair_rate, satisfactory_rate, verysatisfactory_rate, excellent_rate, 
                  duration, serviceOpt, partners, fac_staff, role, cost_fund
                })
            }

  viewReport() {
    return this.httpClient.get<ReportData[]>(this.baseUrl + '/viewReport.php');
  }

  getUserLists() {
    return this.httpClient.get<UserLists[]>(this.baseUrl + '/viewUsers.php');

  }

  // updateReport(id: number, data:any):Observable <any>{
  //   return this.httpClient.put(this.baseUrl )
  // }

}
