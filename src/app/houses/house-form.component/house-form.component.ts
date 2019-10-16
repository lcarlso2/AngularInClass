import { Component, OnChanges, SimpleChanges, DoCheck, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { HouseService } from '../../services/house.service';
import { House } from '../house.model';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'lm-house-form',
  templateUrl: './house-form.component.html',
  styleUrls: ['./house-form.component.css']
})
export class HouseFormComponent implements DoCheck, OnInit {

  @Input() title: string;
  @Input() inputHouse: House;
  @Output() childEvent: EventEmitter<House> = new EventEmitter<House>();

  ngDoCheck() {
    try {
      if (this.houseDisplaying.address.length == 0 || this.houseDisplaying.description.length == 0 || this.houseDisplaying.listingPrice == null
        || this.houseDisplaying.numOfBedroom == null || this.houseDisplaying.numOfBathroom == null
        || this.houseDisplaying.contactPhone.length == 0 || this.houseDisplaying.imageUrl.length == 0
        // || this.houseDisplaying.availableDate == null) { 
      ){
          

        this.isDisabled = true;
      } else {
        this.isDisabled = false;
      }
    }
    catch (error) {
      console.log("Current house not set yet");
    }
  }

  houseDisplaying: House;

  isDisabled: boolean;

  onSubmit() {
    if (this.inputHouse.address == null) {
      let house = new House(null, this.houseDisplaying.address, this.houseDisplaying.description, 454545,
        new Date(), 3, 3, this.houseDisplaying.contactPhone, "assets/images/house7.jpeg", 2, 0);
      this.childEvent.emit(house);
    } else {
      this.childEvent.emit(this.houseDisplaying)
    }

  }



  constructor(private houseService: HouseService, private router: Router) {
    this.isDisabled = true;
  }

  ngOnInit(): void {
    this.houseDisplaying = new House(null, null, null, null, null, null, null, null, null, null, null);
    this.houseDisplaying.id = this.inputHouse.id;
    this.houseDisplaying.address = this.inputHouse.address;
    this.houseDisplaying.description = this.inputHouse.description;
    this.houseDisplaying.listingPrice = this.inputHouse.listingPrice;
    this.houseDisplaying.availableDate = this.inputHouse.availableDate;
    this.houseDisplaying.numOfBedroom = this.inputHouse.numOfBedroom;
    this.houseDisplaying.numOfBathroom = this.inputHouse.numOfBathroom;
    this.houseDisplaying.contactPhone = this.inputHouse.contactPhone;
    this.houseDisplaying.imageUrl = this.inputHouse.imageUrl;
    this.houseDisplaying.rating = this.inputHouse.rating;
    this.houseDisplaying.likes = this.inputHouse.likes;
    this.isDisabled = true;
  }






}
