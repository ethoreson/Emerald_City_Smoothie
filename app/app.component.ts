import { Component } from '@angular/core';
import { Smoothie } from './smoothie.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Rose City Smoothies</h1>
    <smoothie-list [childSmoothieList]="smoothies" (clickSender)="editSmoothie($event)"></smoothie-list>
    <hr>
    <button (click)=addSmoothie()>Add New Smoothie</button>
    <edit-smoothie [childSelectedSmoothie]="selectedSmoothie" (doneButtonClickedSender)="finishedEditing()"></edit-smoothie>
  </div>
<!--    <div *ngIf="newSmoothie">
      <h3>New Smoothie</h3>
      <br>
      <label>Name: </label>
      <input [(ngModel)]="newSmoothie.name">
      <label>Price: </label>
      <input [(ngModel)]="newSmoothie.price">
      <label>Ingredients: </label>
      <input [(ngModel)]="newSmoothie.ingredients">
      <button (click)="finishedCreating()">Save</button>
    </div> -->
  `
})

export class AppComponent {
  smoothies: Smoothie[] = [
    new Smoothie('Orange you glad', 6, ['orange']),
    new Smoothie('Banana-rama', 5, ['banana', ' strawberry']),
    new Smoothie('Mango-agogo', 4, ['mango', ' pineapple'])
  ];
  selectedSmoothie = null;
  newSmoothie = null;

  finishedEditing() {
    this.selectedSmoothie = null;
  }

  editSmoothie(clickedSmoothie) {
    this.selectedSmoothie = clickedSmoothie;
  }
}
