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

  currentHouse: House;



  constructor(private route: ActivatedRoute, private houseService: HouseService) {

  }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');

    this.currentHouse = this.houseService.getHouseBy(id);
  }



}
