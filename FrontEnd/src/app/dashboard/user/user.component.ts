import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from './user';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  displayedColumns: string[] = ['user', 'email', 'customer', 'roles', 'trailUser', 'actions'];
  dataSource:User[] = [];

  constructor(private userService : UserService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getUsers();
  }
  

  getUsers() {
    this.userService.getUsers()
      .subscribe((users: User[]) => {
        this.dataSource = users;
      })
  }

  openDialog(id: number): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result)
      {
        this.userService.deleteUser(id)
          .subscribe((deleted: boolean) => {
            if(deleted) {
              this.getUsers();
            }
          });
      }
    });
  }

}