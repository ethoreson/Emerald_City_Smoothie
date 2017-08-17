import { Component } from '@angular/core';
import { Smoothie } from './smoothie.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <div class="jumbotron">
    <h1>Rose City Smoothies</h1>
  </div>
    <smoothie-list [childSmoothieList]="smoothies" (clickSender)="editSmoothie($event)"></smoothie-list>
    <hr>
    <edit-smoothie [childSelectedSmoothie]="selectedSmoothie" (doneButtonClickedSender)="finishedEditing($event)"></edit-smoothie>
    <new-smoothie (newSmoothieSender)="addSmoothie($event)"></new-smoothie>
  </div>
  `
})

export class AppComponent {
  smoothies: Smoothie[] = [
    new Smoothie('Orange you glad', 6, ['orange', ' banana', ' passion fruit']),
    new Smoothie('Banana-rama', 5, ['banana', ' strawberry']),
    new Smoothie('Mango-agogo', 4, ['mango', ' pineapple']),
    new Smoothie('CranApple', 8, ['cranberry', ' apple']),
    new Smoothie('Caribbean Breeze', 7, ['peach', ' passion fruit']),
    new Smoothie('Razzle Dazzle', 9, ['blueberries', ' raspberries']),
    new Smoothie('Green Giant', 10, ['kale', ' carrots', ' apple', ' cranberries', ' orange'])
  ];
  selectedSmoothie = null;
  newSmoothie = null;

  finishedEditing() {
    this.selectedSmoothie = null;
  }

  editSmoothie(clickedSmoothie) {
    this.selectedSmoothie = clickedSmoothie;
  }

  addSmoothie(newSmoothieFormChild: Smoothie) {
    this.smoothies.push(newSmoothieFormChild);
  }

}
