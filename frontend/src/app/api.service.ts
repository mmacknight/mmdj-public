import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Policy } from  './policy';
import { User } from  './user';
import { Observable } from  'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  PHP_API_SERVER = "http://db.cse.nd.edu/cse30246/mmdj/backend";
  constructor(private httpClient: HttpClient) {}

  readPolicies(): Observable<Policy[]>{
    return this.httpClient.get<Policy[]>(`${this.PHP_API_SERVER}/api/read.php`);
  }

  createPolicy(policy: Policy): Observable<Policy>{
    return this.httpClient.post<Policy>(`${this.PHP_API_SERVER}/api/create.php`, policy);
  }

  updatePolicy(policy: Policy){
    return this.httpClient.put<Policy>(`${this.PHP_API_SERVER}/api/update.php`, policy);
  }

  deletePolicy(id: number){
    return this.httpClient.delete<Policy>(`${this.PHP_API_SERVER}/api/delete.php/?id=${id}`);
  }

  readUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.PHP_API_SERVER}/api/read.php`);
  }

  createUser(user: User): Observable<User>{
    return this.httpClient.post<User>(`${this.PHP_API_SERVER}/api/create.php`, user);
  }

  updateUser(user: User){
    return this.httpClient.put<User>(`${this.PHP_API_SERVER}/api/update.php`, user);
  }

  deleteUser(id: number){
    return this.httpClient.delete<User>(`${this.PHP_API_SERVER}/api/delete.php/?id=${id}`);
  }


}
