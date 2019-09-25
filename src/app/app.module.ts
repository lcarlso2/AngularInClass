import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HouseListComponent } from './houses/house-list.component';
import { HomeComponent } from './houses/home.component';

import { PhonePipe } from './phone-pipe';
import { MoveDayToEndPipe } from './move-day-to-end-pipe';
import { FilteringPipe } from './filtering-pipe';
import { StarComponent } from './shared/star.component';
import { ToiletComponent } from './shared/toilet.component';


@NgModule({
  declarations: [
    AppComponent,
    HouseListComponent,
    HomeComponent,
    PhonePipe,
    MoveDayToEndPipe,
    FilteringPipe,
    StarComponent,
    ToiletComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
