import { Component, OnInit } from '@angular/core';
import { House } from './house.model';
import { HouseService } from '../services/house.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent implements OnInit {

  id: number;

  errorMessage: string;

  currentHouse: House;

  initialLikes: number;

  constructor(private route: ActivatedRoute, private houseService: HouseService) {

  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');

    this.houseService.getHouseBy(this.id).subscribe(house => {
      this.currentHouse = house
      this.initialLikes = this.currentHouse.likes;
    },
      error => this.errorMessage = error
    );
  }

  onBackClick() {
    if (this.currentHouse.likes != this.initialLikes) {
      this.houseService.updateHouse(this.currentHouse);
    }
  }



}
