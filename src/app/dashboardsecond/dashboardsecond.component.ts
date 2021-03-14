import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboardsecond',
  templateUrl: './dashboardsecond.component.html',
  styleUrls: ['./dashboardsecond.component.css']
})
export class DashboardsecondComponent implements OnInit {

  constructor(private router:Router) { }
  profileclick(){
    this.router.navigateByUrl("/profile")
  };
  expclick(){
    this.router.navigateByUrl("/experience")
  };
  educlick(){
    this.router.navigateByUrl("/education")
  };
  deleted(){
    alert("Are you sure?");
    this.router.navigateByUrl("/signup")
  }
  ngOnInit(): void {
  }

}
