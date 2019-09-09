import { Component } from '@angular/core';
import { House } from './house.model';



@Component({
  selector: 'lm-houselist',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css'],
})
export class HouseListComponent{
  isDisabled:boolean = true;

  showID:boolean = true;

  
  houses:House[] = [
      new House(1,"123 Maple st., Carrollton, GA 30118", "Beautiful House", 234000, new Date(2019,8,9),4,3.5,"7704567890","./assets/images/house1.jpeg"),
      new House(2,"234 Maple st., Carrollton, GA 30118", "Ugly House", 123000, new Date(2019,8,9),4,3.5,"4567891232","./assets/images/house2.jpeg"),
      new House(3,"345 Maple st., Carrollton, GA 30118", "Amazing House", 45600, new Date(2019,8,9),4,3.5,"7894561231","./assets/images/house3.jpeg"),
      new House(4,"890 Maple st., Carrollton, GA 30118", "Ehhh House", 999999, new Date(2019,8,9),4,3.5,"3451236786","./assets/images/house4.jpeg"),
      new House(5,"678 Maple st., Carrollton, GA 30118", "Mehh House", 665778, new Date(2019,8,9),4,3.5,"7706754564","./assets/images/house5.jpeg"),
      new House(6,"567 Maple st., Carrollton, GA 30118", "Best House", 987867, new Date(2019,8,9),4,3.5,"7705687665","./assets/images/house6.jpeg"),
      new House(7,"777 Maple st., Carrollton, GA 30118", "Last House", 456789, new Date(2019,8,9),4,3.5,"7700987654","./assets/images/house7.jpeg")
  ]




  onShowIDClicked():void{
    this.showID = !this.showID;
  }
}


