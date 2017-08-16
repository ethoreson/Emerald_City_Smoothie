import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Rose City Smoothies</h1>
    <h2>Live Menu</h2>
    <table>
      <tr>
        <th>Name: </th>
        <td *ngFor="let smoothie of smoothies">{{smoothie.name}}</td>
      </tr>
      <tr>
      <th>Price: </th>
        <td *ngFor="let smoothie of smoothies">&#36;{{smoothie.price}}</td>
      </tr>
      <tr>
      <th>Ingredients: </th>
        <td *ngFor="let smoothie of smoothies">{{smoothie.ingredients}}</td>
      </tr>
      <tr>
      <th>Servings Left: </th>
        <td [class]="runningLow(smoothie)" *ngFor="let smoothie of smoothies">{{smoothie.pints}}</td>
      </tr>
      <tr>
        <th>Edit: </th>
        <td *ngFor="let smoothie of smoothies"><button (click)="editSmoothie(smoothie)">Edit!</button></td>
      </tr>
      <tr>
        <th>Purchase: </th>
        <td *ngFor="let smoothie of smoothies"><button (click)="takeOneDown(smoothie)">Place Order</button></td>
      </tr>
    </table>
    <div>
      <h3>Edit {{selectedSmoothie.name}}:</h3>
     <br>
      <label>Name: </label>
      <input [(ngModel)]="selectedSmoothie.name">
      <label>Price: </label>
      <input [(ngModel)]="selectedSmoothie.price">
      <label>Ingredients: </label>
      <input [(ngModel)]="selectedSmoothie.ingredients">
      <label>Servings Left: </label>
      <input [(ngModel)]="selectedSmoothie.pints">
    </div>
  </div>
  `
})

export class AppComponent {
  smoothies: Smoothie[] = [
    new Smoothie('Orange you glad', 6, ['orange']),
    new Smoothie('Banana-rama', 5, ['banana', ' strawberry']),
    new Smoothie('Mango-agogo', 4, ['mango', ' pineapple'])
  ];
  selectedSmoothie: Smoothie = this.smoothies[0];

  takeOneDown(clickedSmoothie: Smoothie) {
    clickedSmoothie.pints -= 1;
  }

  editSmoothie(clickedSmoothie) {
    this.selectedSmoothie = clickedSmoothie;
  }

  runningLow(clickedSmoothie: Smoothie) {
    if (clickedSmoothie.pints < 11) {
      return "bg-danger";
    }
  }
}

export class Smoothie {
  public pints: number = 20;
  constructor(public name: string, public price: number, public ingredients: Array<string>) { }
}
