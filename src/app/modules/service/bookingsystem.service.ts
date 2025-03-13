import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, map ,switchMap} from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { GlobalService } from "app/modules/service/global.service";
import { config } from 'app/config';
import { environment } from '../../../environments/environment';
import { UserService } from 'app/core/user/user.service';
import  data  from './arrayData'
console.log(data)

@Injectable({
  providedIn: 'root'
})
export class BookingSystemService {
  mutableData = [...data];
 
  apiurl3: string = config.apiurl3; //campus admin
  private _authenticated: boolean = false;

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

  getData(index): Observable<any> {
    return of(this.mutableData[index]);
  }

  getDataById(index,id: number): Observable<any> {
    const item = this.mutableData[index].find(v => v.Id === Number(id));
    return of(item);
  }

  addData(index,item): Observable<any> {
    const lastId = this.mutableData[index].length > 0 ? Math.max(...this.mutableData[index].map(v => v.Id)) : 0;
    item.Id = lastId + 1;
    this.mutableData[index].push(item);
    return of(item);
  }

  updateData(indexx, Id, item): Observable<any> {
    const index = this.mutableData[indexx].findIndex(v => v.Id === Number(Id));
    if (index > -1) {
      this.mutableData[indexx][index] = { ...item, Id };
    }
    return of(this.mutableData[indexx][index]);
  }

  deleteData(index,id: number): Observable<any[]> {
    this.mutableData[index] = this.mutableData[index].filter(v => v.Id !== id);
    return of([...this.mutableData[index]]); 
  }

}