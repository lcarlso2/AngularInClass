import { Component } from '@angular/core';
import { HouseService } from '../services/house.service';
import { House } from './house.model';
import { NgForm } from '@angular/forms';
import { NationalNumber } from 'libphonenumber-js/min';
import { Router } from '@angular/router';

@Component({
  selector: 'app-house-create',
  templateUrl: './house-create.component.html',
  styleUrls: ['./house-create.component.css']
})
export class HouseCreateComponent {
  id: number;
  address: string;
  description: string;
  listingPrice: number;
  availableDate: string;
  numOfBedroom: number;
  numOfBathroom: number;
  contactPhone: string;
  imageUrl: string;
  errorMessage: string;

  onSubmit(){

    let house = new House(this.id, this.address, this.description, this.listingPrice, new Date(this.availableDate), this.numOfBedroom, this.numOfBathroom, this.contactPhone, this.imageUrl, 0, 0);
    this.houseService.createHouse(house);
    this.router.navigate(["/houses"]);
  }

  constructor(private houseService: HouseService, private router: Router) { 
  
  }



  
}
