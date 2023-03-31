import { Component } from '@angular/core';
import { UserLists } from 'src/app/report-data.model';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-user-lists',
  templateUrl: './user-lists.component.html',
  styleUrls: ['./user-lists.component.scss']
})
export class UserListsComponent {

  userLists!: UserLists[];

  constructor( public _api: ApiServicesService){
    this.viewuserLists();
  }

  viewuserLists(){
    this._api.getUserLists()
    .subscribe(
      (response: any) => {
        this._api.userLists = response;
        console.log(response);
      }
    );
  }

}
