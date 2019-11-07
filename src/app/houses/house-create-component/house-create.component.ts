import { Component, OnInit } from "@angular/core";
import { House } from "../house.model";
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl
} from "@angular/forms";
import { HouseService } from "src/app/services/house.service";
import { Router } from "@angular/router";
import { map } from "rxjs/operators";

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
      id: ["", [Validators.required, this.validateIdNotTaken.bind(this)]],
      address: ["", Validators.required],
      description: ["", [Validators.required, Validators.minLength(10)]],
      price: ["", Validators.required],
      availableDate: ["", Validators.required],
      bedrooms: ["", Validators.required],
      bathrooms: ["", Validators.required],
      contactNumber: ["", Validators.required],
      image: ["", Validators.required]
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

  validateIdNotTaken(control: number) {
    return this.service.checkIfIdExists(control).pipe(
      map(res => {
        return res ? { idTaken: true } : { idTaken: false };
      })
    );
  }
}
