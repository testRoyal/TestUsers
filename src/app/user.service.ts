import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl:any = 'https://jsonplaceholder.typicode.com/users';  // URL to web api

  constructor(private httpClient: HttpClient) { }

  getUsersList(): Observable<User>{
     return this.httpClient.get<User>(this.usersUrl);
   } 
  }

