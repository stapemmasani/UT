import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment as env } from '../../environments/environment';

import { Observable } from 'rxjs';
import { User } from 'src/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // headers: Headers;
  constructor(private http: HttpClient) {

  }
  GetUsers(): Observable<User[]> {
    return this.http.get<User[]>(env.apiAddress + '/users');
  }

  GetUser(id: number): Observable<User> {
    return this.http.get<User>(env.apiAddress + '/users/' + id);
  }

  AddUser(user: User): Observable<User> {
    return this.http.post<User>(env.apiAddress + '/users', user);
  }
}
