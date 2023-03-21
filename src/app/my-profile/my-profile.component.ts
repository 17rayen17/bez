import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ActivatedRoute } from '@angular/router';
import { PopupComponent } from './popup/popup.component';


@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit{
  message = 'my profile'
  name = ''
  //activatedroute ; dependencie
  constructor(private route:ActivatedRoute,private dialog: MatDialog){

  }
ngOnInit(): void {
    console.log(this.message)
    // console.log(this.route.snapshot.params['name'])
    this.name= this.route.snapshot.params['name']
  }

  onadd() {
    this.dialog.open(PopupComponent)
  }

}
