import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createprofile',
  templateUrl: './createprofile.component.html',
  styleUrls: ['./createprofile.component.css']
})
export class CreateprofileComponent implements OnInit {

  constructor(private router:Router) { }
  btnclick(){
    this.router.navigateByUrl("/dashboardsecond")
  }
  on:boolean=true;
  ngOnInit(): void {
  }
  done(){
   this.on=false;
  }
}
