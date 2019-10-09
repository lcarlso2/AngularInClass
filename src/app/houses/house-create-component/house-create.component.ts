import { Component, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import { HouseService } from '../../services/house.service';
import { House } from '../house.model';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-house-create',
  templateUrl: './house-create.component.html',
  styleUrls: ['./house-create.component.css']
})
export class HouseCreateComponent implements DoCheck {


  ngDoCheck() {
    if (this.address.length <= 0 || this.description.length <= 0 || this.listingPrice == null
      || this.availableDate.length <= 0 || this.numOfBedroom == null || this.numOfBathroom == null 
      || this.contactPhone.length <= 0 || this.imageUrl.length <= 0) {
      this.isDisabled = true;
    } else {
      this.isDisabled = false;
    }
  }
  address: string;
  description: string;
  listingPrice: number;
  availableDate: string;
  numOfBedroom: number;
  numOfBathroom: number;
  contactPhone: string;
  imageUrl: string;
  errorMessage: string;

  isDisabled: boolean;

  onSubmit() {

    let house = new House(null, this.address, this.description, this.listingPrice, new Date(this.availableDate), this.numOfBedroom, this.numOfBathroom, this.contactPhone, this.imageUrl, 0, 0);
    this.houseService.createHouse(house);
    this.router.navigate(["/houses"]);
  }



  constructor(private houseService: HouseService, private router: Router) {
    this.address = "";
    this.description = "";
    this.availableDate = "";
    this.contactPhone = "";
    this.imageUrl = "";
    this.isDisabled = true;
  }




}
