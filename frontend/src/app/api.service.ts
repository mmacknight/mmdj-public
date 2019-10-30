import { Injectable } from '@angular/core';
import { Policy } from  './policy';
import { User } from  './user';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  PHP_API_SERVER = "http://db.cse.nd.edu/cse30246/mmdj/backend";
  constructor(private httpClient: HttpClient) {}

  readPolicies(): Observable<Policy[]>{
    return this.httpClient.get<Policy[]>(`${this.PHP_API_SERVER}/api/read.php`).pipe(catchError(this.errorHandler));
  }

  createPolicy(policy: Policy): Observable<Policy>{
    return this.httpClient.post<Policy>(`${this.PHP_API_SERVER}/api/create.php`, policy).pipe(catchError(this.errorHandler));
  }

  updatePolicy(policy: Policy){
    return this.httpClient.put<Policy>(`${this.PHP_API_SERVER}/api/update.php`, policy).pipe(catchError(this.errorHandler));
  }

  deletePolicy(id: number){
    return this.httpClient.delete<Policy>(`${this.PHP_API_SERVER}/api/delete.php/?id=${id}`).pipe(catchError(this.errorHandler));
  }

  readUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.PHP_API_SERVER}/api/readUser.php`).pipe(catchError(this.errorHandler));
  }

  createUser(user: User): Observable<User>{
    return this.httpClient.post<User>(`${this.PHP_API_SERVER}/api/createUser.php`, user).pipe(catchError(this.errorHandler));
  }

  updateUser(user: User){
    return this.httpClient.put<User>(`${this.PHP_API_SERVER}/api/updateUser.php`, user).pipe(catchError(this.errorHandler));
  }

  deleteUser(id: number){
    return this.httpClient.delete<User>(`${this.PHP_API_SERVER}/api/deleteUser.php/?id=${id}`).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return observableThrowError(error);
  }
}
