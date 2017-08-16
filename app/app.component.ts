import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Emerald City Smoothies</h1>
    <h2>Live Menu</h2>
    <ul>
      <li *ngFor="let smoothie of smoothies">Name: {{smoothie.name}}
      <br>Price: {{smoothie.price}}
      <br>Ingredients: {{smoothie.ingredients}}
      <br>Pints Left: {{smoothie.pints}}</li>
    </ul>
  </div>
  `
})

export class AppComponent {
  smoothies: Smoothie[] = [
    new Smoothie('Orange you glad', 6, ['orange', 'banana']),
    new Smoothie('Banana-rama', 5, ['banana', 'strawberry', 'mango']),
    new Smoothie('Mango-agogo', 4, ['mango', 'pineapple'])
  ];
}

export class Smoothie {
  public pints: number = 124;
  constructor(public name: string, public price: number, public ingredients: Array<string>) { }
}
