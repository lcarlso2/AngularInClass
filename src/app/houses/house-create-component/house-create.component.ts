import { Component, OnInit, OnChanges } from "@angular/core";
import { House } from "../house.model";
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
  FormControl,
  ValidatorFn,
  ControlContainer
} from "@angular/forms";
import { HouseService } from "src/app/services/house.service";
import { Router } from "@angular/router";
import { map, delay, catchError, switchMap } from "rxjs/operators";
import { Observable, of, timer } from "rxjs";
import { strictEqual } from 'assert';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: "app-house-create",
  templateUrl: "./house-create.component.html",
  styleUrls: ["./house-create.component.css"]
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
      id: [
        "", 
        [Validators.required],
    //    [this.idValidator()]
      ],
      address: ["", Validators.required],
      description: ["", [Validators.required, Validators.minLength(10)]],
      listingPrice: ["", Validators.required],
      availableDate: ["", Validators.required],
      numOfBedroom: ["", Validators.required],
      numOfBathroom: ["", Validators.required],
      contactPhone: ["", [Validators.required, this.phoneValidator()]],
      imageUrl: ["", Validators.required]
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
      console.log("inside invalid form");
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
      .subscribe(house => this.router.navigate(["houses"]));

    // display form values on success
    alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.houseForm.value, null, 4));
  }

  onReset() {
    this.submitted = false;
    this.houseForm.reset();
  }

  idValidator(): AsyncValidatorFn {
    return (
      control: AbstractControl
    ): Observable<{ [key: string]: any } | null> => {
      return this.service.checkIfIdExists(control.value).pipe(
        map(idExists => {
          if (idExists) {
            return { idTaken: true };
          }
        })
      );
    };
  }

  phoneValidator(): ValidatorFn {
    return (control : AbstractControl): {[key : string] : any} | null => {
      let regex = /^([()\- x+]*\d[()\- x+]*){10}$/i;
      const valid = regex.test(control.value);
      return valid ? null : {'invalidPhone' : true};
    }
  }


}
