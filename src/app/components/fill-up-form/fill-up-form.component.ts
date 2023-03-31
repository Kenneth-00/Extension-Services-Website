import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReportData } from 'src/app/report-data.model';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-fill-up-form',
  templateUrl: './fill-up-form.component.html',
  styleUrls: ['./fill-up-form.component.scss']
})
export class FillUpFormComponent implements OnInit {

  fillForm!: FormGroup;
  reportData!: ReportData[];

  constructor(private _fb: FormBuilder, 
              private _api: ApiServicesService,
              // private _dialogRef: MatDialogRef<FillUpFormComponent>,
              // @Inject(MAT_DIALOG_DATA) public data: any
              ){

                // this.fillForm = this._fb.group({
                //   entry_date : '',
                //   facilitator : '',
                //   title : '',
                //   type_beneficiary : '',
                //   count_male : '',
                //   count_female : '',
                //   mean1 : '',
                //   mean2 : '',
                //   mean3 : '',
                //   mean4 : '',
                //   mean5 : '',
                //   duration : '',
                //   serviceOpt : '',
                //   partners : '',
                //   fac_staff : '',
                //   role : '',
                //   cost_fund : ''
                // });


    
  }


  ngOnInit(): void {
    // this.fillForm.patchValue(this.data);
    this.fillForm = this._fb.group ({

      date_entry: ['', [Validators.required]],
      facilitator: ['', [Validators.required]],
      title: ['', [Validators.required]],
      type_beneficiary: ['', [Validators.required]],
      count_male: ['', [Validators.required]],
      count_female: ['', [Validators.required]],
      poor_rate: ['', [Validators.required]],
      fair_rate: ['', [Validators.required]],
      satisfactory_rate: ['', [Validators.required]],
      verysatisfactory_rate: ['', [Validators.required]],
      excellent_rate: ['', [Validators.required]],
      duration: ['', [Validators.required]],
      serviceOpt: ['', [Validators.required]],
      partners: ['', [Validators.required]],
      fac_staff: ['', [Validators.required]],
      role: ['', [Validators.required]],
      cost_fund: ['', [Validators.required]]
    })
  }

  postdata(fillForm:any) {
    
    this._api.addReport(
      fillForm.value.date_entry,
      fillForm.value.facilitator,
      fillForm.value.title,
      fillForm.value.type_beneficiary,
      fillForm.value.count_male,
      fillForm.value.count_female,
      fillForm.value.poor_rate,
      fillForm.value.fair_rate,
      fillForm.value.satisfactory_rate,
      fillForm.value.verysatisfactory_rate,
      fillForm.value.excellent_rate,
      fillForm.value.duration,
      fillForm.value.serviceOpt,
      fillForm.value.partners,
      fillForm.value.fac_staff,
      fillForm.value.role,
      fillForm.value.cost_fund
    )
    .subscribe( 
      (response: any[]) => {
        this.reportData = response;
        console.log(this.reportData);
        // console.log(response);
        alert("Added Successfully!");
        this.fillForm.reset();
      });


    
  }
  
  get date_entry() { 
    return this.fillForm.get('date_entry');
  }

  get facilitator() { 
    return this.fillForm.get('facilitator');
  }

  get title() { 
    return this.fillForm.get('title');
  }

  get type_beneficiary() { 
    return this.fillForm.get('type_beneficiary');
  }

  get count_male() { 
    return this.fillForm.get('count_male');
  }
  
  get count_female() { 
    return this.fillForm.get('count_female');
  }

  get mean1() { 
    return this.fillForm.get('mean1');
  }

  get mean2() { 
    return this.fillForm.get('mean2');
  }

  get mean3() { 
    return this.fillForm.get('mean3');
  }

  get mean4() { 
    return this.fillForm.get('mean4');
  }

  get mean5() { 
    return this.fillForm.get('mean5');
  }

  get duration() { 
    return this.fillForm.get('duration');
  }

  get serviceOpt() { 
    return this.fillForm.get('serviceOpt');
  }

  get partners() { 
    return this.fillForm.get('partners');
  }

  get fac_staff() { 
    return this.fillForm.get('fac_staff');
  }

  get role() { 
    return this.fillForm.get('role');
  }

  get cost_fund() { 
    return this.fillForm.get('cost_fund');
  }


}
