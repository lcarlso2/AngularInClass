import { Component, Input, OnInit } from '@angular/core';
import { HouseService } from 'src/app/services/house.service';
import { House } from 'src/app/houses/house.model';

@Component({
  selector: 'lm-heart',
  templateUrl: './heart.component.html',
  styleUrls: ['./heart.component.css']
})
export class HeartComponent implements OnInit {
  
  @Input() currentHouse: House


  constructor(private houseService: HouseService) { 

  }

  ngOnInit() {
  

  }


  onHeartClick() {

    this.currentHouse.likes += 1;
  }

}
