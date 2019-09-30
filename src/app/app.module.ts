import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HouseListComponent } from './houses/house-list.component';
import { HomeComponent } from './home/home.component';

import { PhonePipe } from './pipes/phone-pipe';
import { MoveDayToEndPipe } from './pipes/move-day-to-end-pipe';
import { FilteringPipe } from './pipes/filtering-pipe';
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
