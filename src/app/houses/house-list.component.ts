import { Component } from '@angular/core';
import { House } from './house.model';

@Component({
  selector: 'lm-houselist',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css']
})
export class HouseListComponent{
  houses:House[] = [
      new House(1,"123 Maple st., Carrollton, GA 30118", "Beautiful House", 234000, new Date(2019,8,9),4,3.5,"1234567890","./assets/images/house1.jpeg"),
      new House(2,"234 Maple st., Carrollton, GA 30118", "Ugly House", 234000, new Date(2019,8,9),4,3.5,"4567891232","./assets/images/house2.jpeg"),
      new House(3,"345 Maple st., Carrollton, GA 30118", "Amazing  House", 234000, new Date(2019,8,9),4,3.5,"7894561231","./assets/images/house3.jpeg")
  ]
}