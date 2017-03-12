import { Component, Input } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent  {

  @Input() childfoods: Meal[];

}
