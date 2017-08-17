import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Smoothie } from './smoothie.model';

@Component({
  selector: 'edit-smoothie',
  template: `
    <div *ngIf="childSelectedSmoothie">
      <h3>Edit {{childSelectedSmoothie.name}}:</h3>
      <br>
      <label>Name: </label>
      <input [(ngModel)]="childSelectedSmoothie.name">
      <label>Price: </label>
      <input [(ngModel)]="childSelectedSmoothie.price">
      <label>Ingredients: </label>
      <input [(ngModel)]="childSelectedSmoothie.ingredients">
      <label>Servings Left: </label>
      <input [(ngModel)]="childSelectedSmoothie.pints">
      <button (click)="doneButtonClicked()">Done</button>
      <hr>
    </div>

  `
})

export class EditSmoothieComponent {
  @Input() childSelectedSmoothie: Smoothie;
  @Output() doneButtonClickedSender = new EventEmitter;

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
