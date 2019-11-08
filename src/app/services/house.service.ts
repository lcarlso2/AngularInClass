import { Injectable } from '@angular/core';
import { House } from '../houses/house.model';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { Observable, throwError, of, timer } from 'rxjs';
import { catchError, tap, switchMap, map } from 'rxjs/operators';
import { resolve, reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  private url = 'http://localhost:3000/houses';

  houses: House[];

  constructor(private http: HttpClient) { }

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
      return this.http.get<any>(this.url + `/${id}`).toPromise().then();
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
