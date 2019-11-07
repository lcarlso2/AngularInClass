import { Component, OnInit } from "@angular/core";
import { House } from "../house.model";
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors
} from "@angular/forms";
import { HouseService } from "src/app/services/house.service";
import { Router } from "@angular/router";
import { map, delay } from "rxjs/operators";
import { Observable, of } from 'rxjs';

@Component({
  selector: "app-house-create",
  templateUrl: "./house-create.component.html",
  styleUrls: ["./house-create.component.css"]
})
export class HouseCreateComponent implements OnInit {
  house: House;
  houses: House[];
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
      id: ["", [Validators.required], [this.idValidator()]],
      address: ["", Validators.required],
      description: ["", [Validators.required, Validators.minLength(10)]],
      price: ["", Validators.required],
      availableDate: ["", Validators.required],
      bedrooms: ["", Validators.required],
      bathrooms: ["", Validators.required],
      contactNumber: ["", Validators.required],
      image: ["", Validators.required]
    });
    this.service.getHouses().subscribe(
        h => { this.houses = h; }
    );
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
    this.diagnostic = JSON.stringify(this.house);
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
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.checkIfIdExists(control.value).pipe(
        map(res => {
          // if res is true, id exists, return true
          console.log("Res is : " + res);
          return res ? { idTaken: true } : null;
          // return null if there is no error
        })
      );
    };
  }

  checkIfIdExists(id: number) {
      return of(this.houses.filter(currentHouse => currentHouse.id === id)).pipe(delay(1000));
  }
}
