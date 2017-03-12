import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public foods: Meal[] = [
  new Meal("Hamburger", "Didn't get a soda or cheese on my burger!", 354),
  new Meal("Fries", "I only ate half of them.", 365)
  ];
  selectedMeal: Meal = null;
  showDetails(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }
  finishedEditing() {
  	this.selectedMeal = null;
  }
}
export class Meal {
	constructor(public name: string, public details: string, public calories: number) {}
	}
