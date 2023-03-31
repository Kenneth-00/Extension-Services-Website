import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FillUpFormComponent } from './components/fill-up-form/fill-up-form.component';
import { HomeComponent } from './components/home/home.component';

import { ApiServicesService } from '../app/services/api-services.service';


import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './components/admin/admin.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AdminviewComponent } from './components/admin/adminview/adminview.component';
import { UserListsComponent } from './components/admin/user-lists/user-lists.component';
import { EditentryComponent } from './components/admin/editentry/editentry.component';


@NgModule({
  declarations: [
    AppComponent,
    FillUpFormComponent,
    HomeComponent,
    AdminComponent,
    AdminviewComponent,
    UserListsComponent,
    EditentryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,

    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatRadioModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    // FontAwesomeModule
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [ ApiServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
