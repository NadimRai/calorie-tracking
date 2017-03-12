import { Component } from '@angular/core';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent  {

   public foods: Meal[] = [
  new Meal("Hamburger", "Didn't get a soda or cheese on my burger!", 354),
  new Meal("Fries", "I only ate half of them.", 365)
  ];

}
