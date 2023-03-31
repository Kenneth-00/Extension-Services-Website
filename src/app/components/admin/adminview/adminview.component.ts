import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ReportData } from 'src/app/report-data.model';
import { ApiServicesService } from 'src/app/services/api-services.service';
import { FillUpFormComponent } from '../../fill-up-form/fill-up-form.component';

@Component({
  selector: 'app-adminview',
  templateUrl: './adminview.component.html',
  styleUrls: ['./adminview.component.scss']
})
export class AdminviewComponent implements OnInit {

  reportData!: ReportData;
  // fillForm: FormGroup;
  entry_id:any;

  constructor( public _api: ApiServicesService, 
              public router: ActivatedRoute,
              public _fb: FormBuilder,
              public _dialog: MatDialog){
    this.adminview();

    // this.fillForm = this._fb.group ({

    //   date_entry: ['', [Validators.required]],
    //   facilitator: ['', [Validators.required]],
    //   title: ['', [Validators.required]],
    //   type_beneficiary: ['', [Validators.required]],
    //   count_male: ['', [Validators.required]],
    //   count_female: ['', [Validators.required]],
    //   poor_rate: ['', [Validators.required]],
    //   fair_rate: ['', [Validators.required]],
    //   satisfactory_rate: ['', [Validators.required]],
    //   verysatisfactory_rate: ['', [Validators.required]],
    //   excellent_rate: ['', [Validators.required]],
    //   duration: ['', [Validators.required]],
    //   serviceOpt: ['', [Validators.required]],
    //   partners: ['', [Validators.required]],
    //   fac_staff: ['', [Validators.required]],
    //   role: ['', [Validators.required]],
    //   cost_fund: ['', [Validators.required]]
    // })
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


  delete() {
    
  }

  openCreateFillForm(){

    this._dialog.open(FillUpFormComponent);
  }

  ngOnInit(): void {
    // let id = '';
    // if(this.router.snapshot.params['id']){
    //   id = this.router.snapshot.params['id'];
    //   console.log(id);

    //   this.fillForm = this._fb.group ({

    //     date_entry: [''],
    //     facilitator: [''],
    //     title: [''],
    //     type_beneficiary: [''],
    //     count_male: [''],
    //     count_female: [''],
    //     poor_rate: [''],
    //     fair_rate: [''],
    //     satisfactory_rate: [''],
    //     verysatisfactory_rate: [''],
    //     excellent_rate: [''],
    //     duration: [''],
    //     serviceOpt: [''],
    //     partners: [''],
    //     fac_staff: [''],
    //     role: [''],
    //     cost_fund: ['']
    //   })
    // }
  }

  // getDetails(id:number){

  //   this._api.getDetailsById(id).subscribe((response:any) => 
  //   {
  //     this.fillForm.controls['date_entry'].setValue(response.date_entry);
  //     this.fillForm.controls['facilitators'].setValue(response.facilitators);
  //     this.fillForm.controls['title'].setValue(response.title);
  //     this.fillForm.controls['type_beneficiary'].setValue(response.type_beneficiary);
  //     this.fillForm.controls['count_male'].setValue(response.count_male);
  //     this.fillForm.controls['count_female'].setValue(response.count_female);
  //     this.fillForm.controls['poor_rate'].setValue(response.poor_rate);
  //     this.fillForm.controls['fair_rate'].setValue(response.fair_rate);
  //     this.fillForm.controls['satisfactory_rate'].setValue(response.satisfactory_rate);
  //     this.fillForm.controls['verysatisfactory_rate'].setValue(response.verysatisfactory_rate);
  //     this.fillForm.controls['excellent_rate'].setValue(response.excellent_rate);
  //     this.fillForm.controls['duration'].setValue(response.duration);
  //     this.fillForm.controls['serviceOpt'].setValue(response.serviceOpt);
  //     this.fillForm.controls['partners'].setValue(response.partners);
  //     this.fillForm.controls['fac_staff'].setValue(response.fac_staff);
  //     this.fillForm.controls['role'].setValue(response.role);
  //     this.fillForm.controls['cost_fund'].setValue(response.cost_fund);
  //   })
  // }

  // postdata(fillForm:any) {
    
  //   this._api.update(this.entry_id, this.reportData)
  //   .subscribe( 
  //     (response: any) => {
  //       this.reportData.date_entry = this.fillForm.value.date_entry;
  //       this.reportData.facilitator = this.fillForm.value.facilitator;
  //       this.reportData.title = this.fillForm.value.title;
  //       this.reportData.type_beneficiary = this.fillForm.value.type_beneficiary;
  //       this.reportData.count_male = this.fillForm.value.count_male;
  //       this.reportData.count_female = this.fillForm.value.count_female;
  //       this.reportData.poor_rate = this.fillForm.value.poor_rate;
  //       this.reportData.fair_rate = this.fillForm.value.fair_rate;
  //       this.reportData.satisfactory_rate = this.fillForm.value.satisfactory_rate;
  //       this.reportData.verysatisfactory_rate = this.fillForm.value.verysatisfactory_rate;
  //       this.reportData.excellent_rate = this.fillForm.value.excellent_rate;
  //       this.reportData.duration = this.fillForm.value.duration;
  //       this.reportData.serviceOpt = this.fillForm.value.serviceOpt;
  //       this.reportData.partners = this.fillForm.value.partners;
  //       this.reportData.fac_staff = this.fillForm.value.fac_staff;
  //       this.reportData.role = this.fillForm.value.role;
  //       this.reportData.cost_fund = this.fillForm.value.cost_fund;

  //       // console.log(response);
  //       alert("Updated Successfully!");
  //     });


    
  // }

  
  // edit() {
    

  // }

}
