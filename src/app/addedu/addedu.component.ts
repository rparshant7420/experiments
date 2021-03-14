import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addedu',
  templateUrl: './addedu.component.html',
  styleUrls: ['./addedu.component.css']
})
export class AddeduComponent implements OnInit {

  constructor(private router:Router) { }
  btnclick(){
    this.router.navigateByUrl("/signin")
  }
  ngOnInit(): void {
  }

}
