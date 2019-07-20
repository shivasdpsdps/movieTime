import { Injectable } from '@angular/core';
// import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Login } from './login';
import { catchError, tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class LoginService {
    username:string;
    // constructor(private http: Http){}
    constructor(private http: HttpClient) { }

    // getUsers(): Observable<Login[]>{
    //      return this.http.get('assets/registration/users/registration.json')
    //         .map((response: Response) => response.json() as Login[])
    //         .catch(this.handleError)
    // }
        getUsers(): Observable<Login[]>{
         return this.http.get<Login[]>('assets/registration/users/registration.json').pipe(
             tap(data => console.log('Data fetched:'+JSON.stringify(data))),
            catchError(this.handleError));

    }

    //  private handleError(error: Response) {
    //     console.error(error);
    //     return Observable.throw(error.json().error || 'Server error');
    // }
    private handleError(err:HttpErrorResponse) {
    let errMsg:string='';
    if (err.error instanceof Error) {
       // A client-side or network error occurred. Handle it accordingly.
       console.log('An error occurred:', err.error.message);
       let errMsg=err.error.message;} 
       else {
       // The backend returned an unsuccessful response code.
       // The response body may contain clues as to what went wrong,
       console.log(`Backend returned code ${err.status}`);
         let errMsg=err.error.status;
     }
        return Observable.throw(errMsg); 
  }
}
