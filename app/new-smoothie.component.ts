import { Component, Output, EventEmitter } from '@angular/core';
import { Smoothie } from './smoothie.model';

@Component({
  selector: 'new-smoothie',
  template: `
    <!--<div *ngIf="newSmoothie">-->
    <div class="new_smoothie">
      <h1>New Smoothie</h1>
    </div>
      <p>Rose City Smoothies is always looking for the next big flavor!</p>
      <div>
        <label>Name: </label>
        <input #newName>
      </div>
      <div>
        <label>Price: $</label>
        <input #newPrice>
        <!--<input [(ngModel)]="newSmoothie.price">-->
      </div>
      <div>
        <label>Ingredients: </label>
        <input #newIngredients>
        <!--<input [(ngModel)]="newSmoothie.ingredients">-->
      </div>
      <button (click)="submitForm(newName.value, newPrice.value, newIngredients.value); newName.value=''; newPrice.value=''; newIngredients.value='';">Add</button>
    <!--</div>-->
  `
})

export class NewSmoothieComponent {
  @Output() newSmoothieSender = new EventEmitter();

  submitForm(name: string, price: number, ingredients: Array<string>) {
    var newSmoothieToAdd: Smoothie = new Smoothie(name, price, ingredients);
    this.newSmoothieSender.emit(newSmoothieToAdd);
  }
}
