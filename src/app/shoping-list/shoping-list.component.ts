import { Component, OnInit } from '@angular/core';
import { ingredient } from '../Shared/ingredient.module';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {

  ingredients :ingredient[] = [
    new ingredient('Apple',2),
    new ingredient('Banana',10)
  ];
  constructor() { }

  ngOnInit() {
  }

}
