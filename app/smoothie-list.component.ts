import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Smoothie } from './smoothie.model';

@Component({
  selector: 'smoothie-list',
  template: `
  <h2>Live Menu</h2>
  <table>
    <tr>
      <th>Name: </th>
      <td *ngFor="let smoothie of childSmoothieList">{{smoothie.name}}</td>
    </tr>
    <tr>
    <th>Price: </th>
      <td *ngFor="let smoothie of childSmoothieList">&#36;{{smoothie.price}}</td>
    </tr>
    <tr>
    <th>Ingredients: </th>
      <td *ngFor="let smoothie of childSmoothieList">{{smoothie.ingredients}}</td>
    </tr>
    <tr>
    <th>Servings Left: </th>
      <td [class]="runningLow(smoothie)" *ngFor="let smoothie of childSmoothieList">{{smoothie.pints}}</td>
    </tr>
    <tr>
      <th>Edit: </th>
      <td *ngFor="let smoothie of childSmoothieList"><button (click)="editButtonHasBeenClicked(smoothie)">Edit!</button></td>
    </tr>
    <tr>
      <th>Purchase: </th>
      <td *ngFor="let smoothie of childSmoothieList"><button (click)="takeOneDown(smoothie)">Place Order</button></td>
    </tr>
  </table>
  `
})

export class SmoothieListComponent {
  @Input() childSmoothieList: Smoothie[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(smoothieToEdit: Smoothie) {
    this.clickSender.emit(smoothieToEdit);
  }

  takeOneDown(clickedSmoothie: Smoothie) {
    clickedSmoothie.pints -= 1;
  }

  runningLow(clickedSmoothie: Smoothie) {
    if (clickedSmoothie.pints < 11) {
      return "bg-danger";
    }
  }

  payScale(smoothie) {
    if (smoothie.price >= 8) {
      alert("8 or over. Test.");
    }
  }
}
