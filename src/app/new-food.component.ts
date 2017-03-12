import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-new-food',
  templateUrl: './new-food.component.html',
  styleUrls: ['./new-food.component.css']
})
export class NewFoodComponent {
	@Output() newFoodSender = new EventEmitter();
  addClicked(name: string, details: string, calories: number) {
    var newFood: Meal= new Meal(name, details, calories);
    this.newFoodSender.emit(newFood);
  }
}
