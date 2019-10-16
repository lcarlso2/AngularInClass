import { Component, OnChanges, SimpleChanges, DoCheck, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { HouseService } from '../../services/house.service';
import { House } from '../house.model';
import { Router } from '@angular/router';

@Component({
  selector: 'lm-house-form',
  templateUrl: './house-form.component.html',
  styleUrls: ['./house-form.component.css']
})
export class HouseFormComponent implements DoCheck, OnInit {


  @Input() house: House;
  @Output() childEvent: EventEmitter<House> = new EventEmitter<House>();

  ngDoCheck() {
    try {
      if (this.currentHouse.address.length == null || this.currentHouse.description.length == null || this.currentHouse.listingPrice == null
        || this.currentHouse.availableDate == null || this.currentHouse.numOfBedroom == null || this.currentHouse.numOfBathroom == null
        || this.currentHouse.contactPhone.length == null || this.currentHouse.imageUrl.length == null) {
        this.isDisabled = true;
      } else {
        this.isDisabled = false;
      }
    }
    catch (error) {
      console.log("Current house not set yet");
    }
  }

  currentHouse: House;

  address: string;
  description: string;
  listingPrice: number;
  availableDate: Date;
  numOfBedroom: number;
  numOfBathroom: number;
  contactPhone: string;
  imageUrl: string;
  errorMessage: string;

  isDisabled: boolean;

  onSubmit() {
    if (this.house.address == null) {
      let house = new House(null, this.address, this.description, this.listingPrice, this.availableDate, this.numOfBedroom, this.numOfBathroom, this.contactPhone, this.imageUrl, 0, 0);
      this.childEvent.emit(house);
    } else {
      this.childEvent.emit(this.house)
    }
    // this.houseService.createHouse(house).subscribe( house => this.router.navigate(["/houses"]) );
  }



  constructor(private houseService: HouseService, private router: Router) {
    this.isDisabled = true;
  }

  ngOnInit(): void {
    this.currentHouse = new House(null, null, null, null, null, null, null, null, null, null, null);
    this.currentHouse.address = this.house.address;
    this.currentHouse.description = this.house.description;
    this.currentHouse.availableDate = this.house.availableDate;
    this.currentHouse.contactPhone = this.house.contactPhone;
    this.currentHouse.imageUrl = this.house.imageUrl;
    this.isDisabled = true;
  }






}
