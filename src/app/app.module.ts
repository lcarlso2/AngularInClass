import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HouseListComponent } from './houses/house-list.component';
import { PhonePipe } from './phone-pipe';
import { HomeComponent } from './houses/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HouseListComponent,
    HomeComponent,
    PhonePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
