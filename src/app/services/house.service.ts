import { Injectable } from '@angular/core';
import { House } from '../houses/house.model';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { Observable, throwError, of, timer } from 'rxjs';
import { catchError, tap, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  private url = 'http://localhost:3000/houses';

  houses: House[];

  constructor(private http: HttpClient) {
    // this.houses = [new House(1, "123 Maple st., Carrollton, GA 30118", "Beautiful House", 234000, new Date(), 4, 2.5, "7704567890", "./assets/images/house1.jpeg", 4.5, 0),
    // new House(2, "234 Burge st., Carrollton, GA 30118", "Ugly House", 123000, new Date(), 4, 1.5, "4567891232", "./assets/images/house2.jpeg", 3.5, 0),
    // new House(3, "345 Dood st., Carrollton, GA 30118", "Amazing House", 45600, new Date(), 4, 3.5, "7894561231", "./assets/images/house3.jpeg", 2, 0),
    // new House(4, "890 Bomb st., Carrollton, GA 30118", "Ehhh House", 999999, new Date(), 4, 4.5, "3451236786", "./assets/images/house4.jpeg", 5, 0),
    // new House(5, "678 Burge st., Carrollton, GA 30118", "Mehh House", 665778, new Date(), 4, 5, "7706754564", "./assets/images/house5.jpeg", 1.5, 0),
    // new House(6, "567 Maple st., Carrollton, GA 30118", "Best House", 987867, new Date(), 4, 2, "7705687665", "./assets/images/house6.jpeg", 4.9, 0),
    // new House(7, "777 Highway st., Carrollton, GA 30118", "Last House", 456789, new Date(), 4, 1, "7700987654", "./assets/images/house7.jpeg", 3.2, 0)]
  }

  getHouses(): Observable<House[]> {
    return this.http.get<House[]>(this.url).pipe(
      tap(data => console.log('All' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getHouseBy(id: number): Observable<House> {
    return this.http.get<House>(this.url + `/${id}`).pipe(
      tap(data => console.log('All' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  updateHouse(currentHouse: House) {
    let tempUrl = this.url + `/${currentHouse.id}`;
    return this.http.patch(tempUrl, currentHouse);
  }

  createHouse(house: House) {
    return this.http.post(this.url, house).pipe(
      tap(data => console.log('All' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  deleteHouse(house: House): Observable<void> {
    let tempUrl = this.url + `/${house.id}`;
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.delete<void>(tempUrl, httpOptions).pipe(
      tap(() => console.log('Success')),
      catchError(this.handleError)
    );
  }

  checkIfIdExists(id: number) {
     return timer(1000).pipe(switchMap(() => {
      return this.http.get<any>(this.url + `/${id}`)
    })
    );
  }


  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later.');
  }
}
