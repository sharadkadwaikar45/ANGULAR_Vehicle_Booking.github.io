import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, map ,switchMap} from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { GlobalService } from "app/modules/service/global.service";
import { config } from 'app/config';
import { environment } from '../../../environments/environment';
import { UserService } from 'app/core/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class BookingSystemService {
 
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
}