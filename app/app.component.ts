import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Emerald City Smoothies</h1>
    <h2>Live Menu</h2>
    <table>
      <tr ng-style="{'text-align' : left}">
        <th>Name:</th>
        <th>Price:</th>
        <th>Ingredients:</th>
        <th>Pints Left:</th>
        <th>Edit:</th>
        <th>Order 1:</th>
      </tr>
      <tr>
        <td *ngFor="let smoothie of smoothies">{{smoothie.name}}</td>
      </tr>
      <tr>
        <td *ngFor="let smoothie of smoothies">{{smoothie.price}}</td>
      </tr>
      <tr>
        <td *ngFor="let smoothie of smoothies">{{smoothie.ingredients}}</td>
      </tr>
      <tr>
        <td *ngFor="let smoothie of smoothies">{{smoothie.pints}}</td>
      </tr>
      <tr>
        <td *ngFor="let smoothie of smoothies"><button (click)="editSmoothie()">Edit!</button></td>
      </tr>
      <tr>
        <td *ngFor="let smoothie of smoothies"><button (click)="takeOneDown(smoothie)">Place Order</button></td>
      </tr>
    </table>
  </div>
  `
})

export class AppComponent {
  smoothies: Smoothie[] = [
    new Smoothie('Orange you glad', 6, ['orange']),
    new Smoothie('Banana-rama', 5, ['banana', 'strawberry']),
    new Smoothie('Mango-agogo', 4, ['mango', 'pineapple'])
  ];


  takeOneDown(clickedSmoothie: Smoothie) {
    clickedSmoothie.pints -= 1;
    alert(clickedSmoothie.pints);
  }

  editSmoothie() {
    alert("you just edited a smoothie!");
  }
}

export class Smoothie {
  public pints: number = 124;
  constructor(public name: string, public price: number, public ingredients: Array<string>) { }
}
