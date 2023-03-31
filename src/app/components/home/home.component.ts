import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiServicesService } from 'src/app/services/api-services.service';
import { FillUpFormComponent } from '../fill-up-form/fill-up-form.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // displayedColumns: string[] = [
  //   'entry_date',
  //   'facilitator',
  //   'title',
  //   'type_beneficiary',
  //   'count_male',
  //   'count_female',
  //   'mean1',
  //   'mean2',
  //   'mean3',
  //   'mean4',
  //   'mean5',
  //   'duration',
  //   'serviceOpt',
  //   'partners',
  //   'fac_staff',
  //   'role',
  //   'cost_fund'
  // ]

  // dataSource!: MatTableDataSource<any>;

  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  // @ViewChild(MatSort) sort!: MatSort;

  constructor(private _dialog: MatDialog,
    private _api: ApiServicesService) { }
  
  openCreateFillForm(){

    this._dialog.open(FillUpFormComponent);

    // const _dialogRef = this._dialog.open(FillUpFormComponent);
    // _dialogRef.afterClosed().subscribe({
    //   next: (val) {
    //     this.getmonthlyReportdata();
    //   },
    // });
  }

  viewReports(){
    
  }

  // getmonthlyReportdata(){
  //   this._api.getmonthlyReportdata().subscribe({
  //     next: (res: any) => {
  //       this.dataSource = new MatTableDataSource(res);
  //       this.dataSource.sort = this.sort;
  //       this.dataSource.paginator = this.paginator;
  //     },
  //     error: console.log(),
  //   });
  // }
  
  
  ngOnInit() {
    this._api.viewReport();
  }


}
