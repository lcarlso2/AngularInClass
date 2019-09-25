import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { House } from './house.model';
import { HouseService } from '../services/house.service';



@Component({
  selector: 'lm-houselist',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css'],
})
export class HouseListComponent implements OnInit, OnChanges{

  childInfo: string;
 
  @Input() parentPageTitle:string;

  isDisabled:boolean = true;

  ngOnChanges():void{
    console.log('in on changes ' + 'parentPageTitle is: ' + this.parentPageTitle);
  }

  ngOnInit(): void {
    console.log('in on init ' + 'parentPageTitle is: ' + this.parentPageTitle);
  }

 
  showID:boolean = true;

  private _searchTerm:string='';

  
  houses:House[];

  constructor(private houseService: HouseService) {
    this.houses = this.houseService.getHouses();
    this.searchResult = this.houses;
    this.childInfo = '';
    
  }

  searchResult:House[] = this.houses;



  get searchTerm():string{
    return this._searchTerm;
  }

  set searchTerm(newTerm:string){
    this._searchTerm = newTerm;
    this.onSearchClicked();
  }

  onShowIDClicked():void{
    this.showID = !this.showID;
  }


  onSearchClicked():void{
    this.searchResult = this.searchTerm && this.searchTerm.length>0 ? 
    this.houses.filter( house => house.address.toLowerCase().includes(this.searchTerm)) 
    : this.houses;
  }

  onAdd():void{
    this.houses.push(new House(this.houses.length + 1,"777 Highway st., Carrollton, GA 30118", "Last House", 456789, new Date(2019,8,9),4,3.5,"7700987654","./assets/images/house7.jpeg", 4.8));
  }

  onChildEvent(eventValue:string):void{
    this.childInfo = eventValue;
  }

}
