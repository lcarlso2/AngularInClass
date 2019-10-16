import { Component, OnChanges, SimpleChanges, DoCheck, OnInit } from '@angular/core';
import { HouseService } from '../../services/house.service';
import { House } from '../house.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-house-create',
  templateUrl: './house-create.component.html',
  styleUrls: ['./house-create.component.css']
})
export class HouseCreateComponent  {
  

  house: House;

  onChildEvent(house: House): void {    
    this.houseService.createHouse(house).subscribe( house => this.router.navigate(["/houses"]) );
  }

  constructor(private houseService: HouseService, private router: Router) {
    this.house = new House(null,null,null,null,null,null,null,null,null,null,null);
  }






}
