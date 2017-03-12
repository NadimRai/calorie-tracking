import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-edit-food',
  templateUrl: './edit-food.component.html',
  styleUrls: ['./edit-food.component.css']
})
export class EditFoodComponent  {
@Input() childEditFood: Meal;  
@Output() doneEditingSender = new EventEmitter();
doneEditing(){
	this.doneEditingSender.emit();
}

}
