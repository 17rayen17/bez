import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
name=""
  constructor(private route:ActivatedRoute) {

  }
ngOnInit(): void {
  this.name= this.route.snapshot.params['name']
}
}
