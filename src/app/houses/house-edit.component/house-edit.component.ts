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
  title = `You are editing the current house!`
  errorMessage: string;

  onChildEvent(house: House): void {    
    console.log(house.description + "  ------ testing");
    this.houseService.updateHouse(house).subscribe(house => this.router.navigate(["/houses"]) );
  }

  constructor(private houseService: HouseService, private route: ActivatedRoute, private router: Router) {
    this.house = new House(null,null,null,null,null,null,null,null,null,null,null);
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
        let id = params['id'];
        let address= params['address'];
        let descrip = params['description'];
        let price = params['listingPrice'];
        let date = params['availableDate'];
        let bedroom = params['numOfBedroom'];
        let bathoom = params['numOfBathroom'];
        let phone = params['contactPhone'];
        let url = params['imageUrl'];
        let rating = params['rating'];
        let likes = parseInt(params['likes']);

        this.house = new House(id, address, descrip, price, new Date(date), bedroom, bathoom, phone, url, rating, likes);
    })
  }



}
