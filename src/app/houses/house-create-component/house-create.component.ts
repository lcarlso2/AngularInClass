import { Component, OnInit, OnChanges } from '@angular/core';
import {
    FormGroup,
    FormBuilder,
    Validators,
    AbstractControl,
    AsyncValidatorFn,
    ValidatorFn,
    FormControl,
} from '@angular/forms';
import { HouseService } from 'src/app/services/house.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { House } from '../house.model';

@Component({
    selector: 'app-house-create',
    templateUrl: './house-create.component.html',
    styleUrls: ['./house-create.component.css'],
})
export class HouseCreateComponent implements OnInit {
    house: House;
    houseForm: FormGroup;
    submitted = false;
    diagnostic: string;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private service: HouseService
    ) {
        this.house = new House(
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            0,
            0
        );
    }

    ngOnInit() {
        this.houseForm = this.formBuilder.group({
            id: new FormControl(
                '',
                [Validators.required],
          //          [this.idValidator()]
            ),
            address: new FormControl('', Validators.required),
            description: new FormControl('', [Validators.required]),
            listingPrice: new FormControl('', Validators.required),
            availableDate: new FormControl('', Validators.required),
            numOfBedroom: new FormControl('', Validators.required),
            numOfBathroom: new FormControl('', Validators.required),
            contactPhone: new FormControl('', [Validators.required]),
            imageUrl: new FormControl('', Validators.required),
        });
    }

    // convenience getter for easy access to form fields
    get fields() {
        return this.houseForm.controls;
    }

    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.houseForm.invalid) {
            console.log('inside invalid form');
            return;
        }

        this.house.id = +this.houseForm.value.id;
        this.house.address = this.houseForm.value.address;
        this.house.description = this.houseForm.value.description;
        this.house.listingPrice = +this.houseForm.value.listingPrice;
        this.house.availableDate = this.houseForm.value.availableDate;
        this.house.numOfBedroom = +this.houseForm.value.numOfBedroom;
        this.house.numOfBathroom = +this.houseForm.value.numOfBathroom;
        this.house.contactPhone = this.houseForm.value.contactPhone;
        this.house.imageUrl = this.houseForm.value.imageUrl;

        this.diagnostic = JSON.stringify(this.houseForm.value);

        this.service
            .createHouse(this.house)
            .subscribe(house => this.router.navigate(['houses']));

        // display form values on success
        alert(
            'SUCCESS!! :-)\n\n' + JSON.stringify(this.houseForm.value, null, 4)
        );
    }

    onReset() {
        this.submitted = false;
        this.houseForm.reset();
    }

}
