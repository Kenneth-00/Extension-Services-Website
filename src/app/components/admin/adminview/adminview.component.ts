import { Component } from '@angular/core';
import { ReportData } from 'src/app/report-data.model';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-adminview',
  templateUrl: './adminview.component.html',
  styleUrls: ['./adminview.component.scss']
})
export class AdminviewComponent {

  reportData!: ReportData[];

  constructor( public _api: ApiServicesService){
    this.adminview();
  }

  adminview(){
    this._api.viewReport()
    .subscribe(
      (response: any) => {
        this._api.reportData = response;
        console.log(response);
      }
    );
  }

}
