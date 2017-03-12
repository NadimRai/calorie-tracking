import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	public masterfoods: Meal[] = [
  new Meal("Hamburger", "Didn't get a soda or cheese on my burger!", 354),
  new Meal("Fries", "I only ate half of them.", 365),
  new Meal("Salad", "Had salad for lunch and dinner", 300)
  ];
 
  selectedMeal: Meal = null;
  showDetails(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }
  finishedEditing() {
  	this.selectedMeal = null;
  }
  addTask(foodChild: Meal){
    this.masterfoods.push(foodChild);
  }
}

