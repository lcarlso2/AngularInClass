import { Component, OnInit } from '@angular/core';
import { House } from '../house.model';
import { HouseService } from '../../services/house.service';
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

  constructor(private route: ActivatedRoute, private houseService: HouseService) {

  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');

    this.houseService.getHouseBy(this.id).subscribe(house => {
      this.currentHouse = house
    },
      error => this.errorMessage = error
    );
  }

  onBackClick() {
    this.houseService.updateHouse(this.currentHouse).subscribe();
    
  }



}
