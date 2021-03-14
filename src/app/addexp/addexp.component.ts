import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addexp',
  templateUrl: './addexp.component.html',
  styleUrls: ['./addexp.component.css']
})
export class AddexpComponent implements OnInit {

  constructor(private router:Router) { }
  btnclick(){
    this.router.navigateByUrl("/dashboardsecond")
  }
  ngOnInit(): void {
  }

}
