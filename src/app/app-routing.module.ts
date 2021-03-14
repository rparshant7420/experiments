import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddeduComponent } from './addedu/addedu.component';
import { AddexpComponent } from './addexp/addexp.component';
import { CreateprofileComponent } from './createprofile/createprofile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardsecondComponent } from './dashboardsecond/dashboardsecond.component';
import { MainComponent } from './main/main.component';
import { PostsComponent } from './posts/posts.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path:"",
    component:MainComponent
  },
  {
    path:"experience",
    component:AddexpComponent
  },
  {
    path:"education",
    component:AddeduComponent
  },
  {
    path:"dashboardsecond",
    component:DashboardsecondComponent
  },
  {
    path:"profile",
    component:CreateprofileComponent
  },
  {
    path:"posts",
    component:PostsComponent
  },
  {
    path:"signup",
    component:SignupComponent
  },
  {
    path:"dashboard",
    component:DashboardComponent
  },
  {
    path:"dashboardsecond",
    component:DashboardsecondComponent
  },
  {
    path:"signin",
    component:SigninComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
