import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { House } from '../house.model';
import { HouseService } from '../../services/house.service';
import { Router } from '@angular/router';



@Component({
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css'],
})
export class HouseListComponent implements OnInit, OnChanges {



  errorMessage: string;

  childInfo: string;

  @Input() parentPageTitle: string;

  isDisabled: boolean = true;


  showID: boolean = true;

  showDelete: boolean = true;

  showConfirmation: boolean = !this.showDelete;


  private _searchTerm: string = '';

  houses: House[];

  searchResult: House[] = this.houses;

  ngOnChanges(): void {
    // this.houseService.getHouses().subscribe(houses => {
    //   this.houses = houses;
    //   this.searchResult = this.houses;
    // },
    //   error => this.errorMessage = error
    // );
  }

  ngOnInit(): void {
    this.houseService.getHouses().subscribe(houses => {
      this.houses = houses;
      this.searchResult = this.houses;
    },
      error => this.errorMessage = error
    );
  }



  constructor(private houseService: HouseService, private router: Router) {
    this.childInfo = '';
  }

  get searchTerm(): string {
    return this._searchTerm;
  }

  set searchTerm(newTerm: string) {
    this._searchTerm = newTerm;
    this.onSearchClicked();
  }

  onShowIDClicked(): void {
    this.showID = !this.showID;
  }


  onSearchClicked(): void {
    this.searchResult = this.searchTerm && this.searchTerm.length > 0 ?
      this.houses.filter(house => house.address.toLowerCase().includes(this.searchTerm))
      : this.houses;
  }

  onClickDelete(): void {
    this.showDelete = false;
    this.showConfirmation = true;
  }

  onClickYesDelete(house: House): void {
    this.houseService.deleteHouse(house).subscribe(
      () => {
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['/houses']);

      },
      error => this.errorMessage = error
    );
    this.showConfirmation = false;
    this.showDelete = true;
  }

  onClickNoDelete(): void {
    this.showDelete = true;
    this.showConfirmation = false;
  }


  onClickEdit(house: House): void {

  }


  onAdd(): void {
    this.houses.push(new House(this.houses.length + 1, "777 Highway st., Carrollton, GA 30118", "Last House", 456789, new Date(2019, 8, 9), 4, 3.5, "7700987654", "./assets/images/house7.jpeg", 4.8, 0));
  }

  onChildEvent(eventValue: string): void {
    this.childInfo = eventValue;
  }

}
