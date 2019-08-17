import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class HTTPServices { 
  constructor(private http: HttpClient) {}

  getData (url): Observable<any> {
    return this.http.get<any>(url)
      .pipe(
        tap(info => this.log(`getData <----> service`)),
        catchError(this.handleError('Handle Error', {}))
      );
  }

  postData (url, params): Observable<any> {
    return this.http.post<any>(url, params)
      .pipe(
        tap(info => this.log(`getData <----> service`)),
        catchError(this.handleError('Handle Error', {}))
      );
  }
  
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log('LOGGING:: ' + message);
  }

}
