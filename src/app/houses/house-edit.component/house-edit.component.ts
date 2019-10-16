import { Component, OnInit } from '@angular/core';
import { HouseService } from 'src/app/services/house.service';
import { Router, ActivatedRoute } from '@angular/router';
import { House } from '../house.model';

@Component({
  selector: 'app-house-edit',
  templateUrl: './house-edit.component.html',
  styleUrls: ['./house-edit.component.css']
})
export class HouseEditComponent implements OnInit {
 

  house: House;

  errorMessage: string;

  onChildEvent(house: House): void {    
    this.houseService.createHouse(house).subscribe( house => this.router.navigate(["/houses"]) );
  }

  constructor(private houseService: HouseService, private route: ActivatedRoute, private router: Router) {
    this.house = new House(null,null,null,null,null,null,null,null,null,null,null);
  }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');

    this.houseService.getHouseBy(id).subscribe(house => {
      this.house = house
    },
      error => this.errorMessage = error
    );
  }



}
