import { Pipe, PipeTransform } from '@angular/core';
import { House } from './houses/house.model';

@Pipe({
    name: 'filtering',
    pure: false
})

export class FilteringPipe implements PipeTransform {
    transform(houses: House[], searchTerm: string): House[] {
        return searchTerm && searchTerm.length > 0 ?
            houses.filter(house => house.address.toLowerCase().includes(searchTerm) || house.listingPrice <= Number(searchTerm))
            : houses;
    }
}