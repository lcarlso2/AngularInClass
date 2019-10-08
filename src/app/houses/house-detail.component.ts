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

  errorMessage: string;

  currentHouse: House;

  constructor(private route: ActivatedRoute, private houseService: HouseService) {

  }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');

    this.houseService.getHouseBy(id).subscribe( houses => {
      this.currentHouse = houses[0]
    },
    error => this.errorMessage = error 
    );
  }



}
