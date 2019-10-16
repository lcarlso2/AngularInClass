import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { HouseListComponent } from './houses/house-list.component/house-list.component';
import { HomeComponent } from './home/home.component';

import { PhonePipe } from './pipes/phone-pipe';
import { MoveDayToEndPipe } from './pipes/move-day-to-end-pipe';
import { FilteringPipe } from './pipes/filtering-pipe';

import { MenuComponent } from './menu/menu.component';
import { HouseDetailComponent } from './houses/house-detail-component/house-detail.component';

import { StarComponent } from './shared/star/star.component';
import { ToiletComponent } from './shared/toilet/toilet.component';
import { HeartComponent } from './shared/heart/heart.component';

import { HttpClientModule } from '@angular/common/http';
import { HouseCreateComponent } from './houses/house-create-component/house-create.component';
import { HouseEditComponent } from './houses/house-edit.component/house-edit.component'
import { HouseFormComponent } from './houses/house-form.component/house-form.component'


@NgModule({
  declarations: [
    AppComponent,
    HouseListComponent,
    HomeComponent,
    PhonePipe,
    MoveDayToEndPipe,
    FilteringPipe,
    StarComponent,
    ToiletComponent,
    MenuComponent,
    HouseDetailComponent,
    HeartComponent,
    HouseCreateComponent,
    HouseFormComponent,
    HouseEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'houses', component: HouseListComponent},
      {path: 'home', component: HomeComponent},
      {path: 'houses/:id', component: HouseDetailComponent},
      {path: 'create', component: HouseCreateComponent},
      {path : '', redirectTo:'home', pathMatch:'full'},
      {path: '**', redirectTo:'home', pathMatch:'full'},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
