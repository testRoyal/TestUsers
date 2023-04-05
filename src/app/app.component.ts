import { Component, OnInit } from '@angular/core';
import {User} from './user';
import {UserService} from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'UsersList';
  private usersUrl:any = 'https://jsonplaceholder.typicode.com/users';
  usersList: any=[];

  constructor (private userService: UserService){
  }

    ngOnInit() {
    this.userService.getUsersList().subscribe((data:any ) => {
      this.usersList.push(...data);
      });
    }    
  }
  

 