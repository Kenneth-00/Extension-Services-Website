import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { AdminviewComponent } from './components/admin/adminview/adminview.component';
import { UserListsComponent } from './components/admin/user-lists/user-lists.component';
import { FillUpFormComponent } from './components/fill-up-form/fill-up-form.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  
  // {path: 'fill-up-form', component:FillUpFormComponent},
  {path: 'home', component:HomeComponent,

    children:[
      {path: 'admin', component:AdminComponent},
      {path:'admin/allrecords', component:AdminviewComponent},
      {path:'admin/allusers', component:UserListsComponent}
    ]
  },
  {path: '', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [ CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
