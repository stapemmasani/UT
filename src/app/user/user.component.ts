
import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[] = [];
  constructor(private userService: UserService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    // tslint:disable-next-line: deprecation
    this.userService.GetUsers().subscribe((res) => {
      this.users = res;
    });
  }
}

