import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './signup/signup.component';
import { PostsComponent } from './posts/posts.component';


// angular material imports

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SigninComponent } from './signin/signin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateprofileComponent } from './createprofile/createprofile.component';
import { DashboardsecondComponent } from './dashboardsecond/dashboardsecond.component';
import { AddexpComponent } from './addexp/addexp.component';
import { AddeduComponent } from './addedu/addedu.component';
import { CUSTOM_ELEMENTS_SCHEMA} from '@angular/core'
// import {MatSelectModule} from '@angular/material/select';
// import {MatTableModule} from '@angular/material/table';
// import {MatDatepickerModule} from '@angular/material/datepicker';
// import {MatCheckboxModule} from '@angular/material/checkbox';






@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SignupComponent,
    PostsComponent,
    SigninComponent,
    DashboardComponent,
    CreateprofileComponent,
    DashboardsecondComponent,
    AddexpComponent,
    AddeduComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    // MatCheckboxModule
    // MatDatepickerModule,
    // MatSelectModule,
    // MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
