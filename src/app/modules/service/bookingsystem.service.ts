import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, map ,switchMap} from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { GlobalService } from "app/modules/service/global.service";
import { config } from 'app/config';
import { environment } from '../../../environments/environment';
import { UserService } from 'app/core/user/user.service';
import { userData, venderData, bookingData, driverData, bookedDriverData, vehicleData, fuelData, reminderData } from './arrayData'

@Injectable({
  providedIn: 'root'
})
export class BookingSystemService {
 
  apiurl3: string = config.apiurl3; //campus admin
  private _authenticated: boolean = false;
  Data : any
      /**
     * Setter & getter for access token
     */
      set accessToken(token: string)
      {
          localStorage.setItem('accessToken', token);
      }
  
      get accessToken(): string
      {
          return localStorage.getItem('accessToken') ?? '';
      }
   
constructor(
    private httpClient: HttpClient,
    public _globalService: GlobalService,
    private _userService: UserService
    ) {}

    
public handleError(error) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
      } else {
          // server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
  }

  getArray(type) {
    switch (type) {
        case "user": this.Data = userData; break;
        case "vendor": this.Data = venderData; break;
        case "booking": this.Data = bookingData; break;
        case "driver": this.Data = driverData; break;
        case "bookedDriver": this.Data = bookedDriverData; break;
        case "vehicle": this.Data = vehicleData; break;
        case "fuel": this.Data = fuelData; break;
        case "reminder": this.Data = reminderData; break;
        default: this.Data = [];
            console.warn("Invalid type provided");
    }
  }

  getData(): Observable<any> {
    return of(this.Data);
  }

  getDataById(id: number): Observable<any> {
    const item = this.Data.find(v => v.Id === Number(id));
    return of(item);
  }

  addData(item): Observable<any> {
    const lastId = this.Data.length > 0 ? Math.max(...this.Data.map(v => v.Id)) : 0;
    item.Id = lastId + 1;
    this.Data.push(item);
    return of(item);
  }

  updateData( Id, item): Observable<any> {
    const index = this.Data.findIndex(v => v.Id === Number(Id));
    if (index > -1) {
      this.Data[index] = { ...item, Id };
    }
    return of(this.Data[index]);
  }

  deleteData(id: number): Observable<any[]> {
    this.Data = this.Data.filter(v => v.Id !== id);
    return of([...this.Data]); 
  }

}