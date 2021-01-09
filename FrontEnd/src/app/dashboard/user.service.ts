import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(environment.baseURL + 'user');
  }

  deleteUser(id: number):Observable<boolean> {
    return this.http.delete<boolean>(environment.baseURL + 'user/' + id.toString());
  }

  addUser(user: User):Observable<User>{
    return this.http.post<User>(environment.baseURL + 'user',user);
  }
}
