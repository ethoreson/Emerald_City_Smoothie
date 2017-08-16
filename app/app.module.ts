import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { SmoothieListComponent }  from './smoothie-list.component';
import { EditSmoothieComponent } from './edit-smoothie.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, SmoothieListComponent, EditSmoothieComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
