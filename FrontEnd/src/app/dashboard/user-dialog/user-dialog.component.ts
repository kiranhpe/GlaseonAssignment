import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../user.service';
import { User } from '../user/user';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css'],
})
export class UserDialogComponent implements OnInit {
  profileForm: FormGroup;
  constructor(
    private userService: UserService,
    public dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _snackBar: MatSnackBar
  ) {}

  costomers = [
    { value: '1', viewValue: 'Internal' },
    { value: '2', viewValue: 'External' },
  ];

  roles = [
    { checked: false, value: 'Global Gleason Admin' },
    { checked: false, value: 'User' },
    { checked: false, value: 'Customer Admin' },
    { checked: false, value: 'Global Interl Sales' },
  ];
  selectedCustomer = '';
  trailUser = false;

  user: User;
  ngOnInit(): void {
    this.profileForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      username: new FormControl(''),
      email: new FormControl(''),
      customer: new FormControl('')
    });
    if (this.data.action == 'add') {
      this.profileForm = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        username: new FormControl(''),
        email: new FormControl(''),
        customer: new FormControl('')
      });
    }
    if (this.data.action == 'view') {
      this.userService.getUserById(this.data.id).subscribe((user) => {
        this.user = user;
        this.profileForm = new FormGroup({
          firstName: new FormControl(user.first_name),
          lastName: new FormControl(user.last_name),
          username: new FormControl(user.username),
          email: new FormControl(user.email),
          customer: new FormControl(user.customer_type)
        });

        this.trailUser = user.trail_user;
        this.roles = JSON.parse(user.role);
        this.profileForm.disable();
      });
    }
    if (this.data.action == 'edit') {
      this.userService.getUserById(this.data.id).subscribe((user) => {
        this.user = user;
        this.profileForm = new FormGroup({
          firstName: new FormControl(user.first_name),
          lastName: new FormControl(user.last_name),
          username: new FormControl(user.username),
          email: new FormControl(user.email),
          customer: new FormControl(user.customer_type)
        });

        this.trailUser = user.trail_user;
        this.roles = JSON.parse(user.role);
      });
    }
  }

  onSave() {
    let user: User = {
      first_name: this.profileForm.value.firstName,
      last_name: this.profileForm.value.lastName,
      username: this.profileForm.value.username,
      email: this.profileForm.value.email,
      trail_user: this.trailUser,
      role: JSON.stringify(this.roles),
      customer_type: this.selectedCustomer,
    };

    this.userService.addUser(user).subscribe((data: any) => {
      this.dialogRef.close();
    });

    this._snackBar.open('User Created!!', 'close',{
      duration: 500,
      panelClass:['green-snackbar']
    } )
  }

  onEdit() {
    let user: User = {
      first_name: this.profileForm.value.firstName,
      last_name: this.profileForm.value.lastName,
      username: this.profileForm.value.username,
      email: this.profileForm.value.email,
      trail_user: this.trailUser,
      role: JSON.stringify(this.roles),
      customer_type: this.selectedCustomer,
      id: this.data.id
    };

    this.userService
      .updateUser(user)
      .subscribe((data: any) => {
        this.dialogRef.close();
      });

      this._snackBar.open('User Updated!!', 'close',{
        duration: 500
      } )
  }

  changeCustomer(event: MatSelectChange) {
    this.selectedCustomer = event.value;
  }

  updateRoles(role: string) {
    for (var i in this.roles) {
      if (this.roles[i].value == role) {
        this.roles[i].checked = !this.roles[i].checked;
        break;
      }
    }
  }

  getUserById(id: number) {
    this.userService.getUserById(id).subscribe((user) => {
      this.user = user;
    });
  }

  toggleTrailUser(event:MatCheckboxChange) {
    this.trailUser = event.checked;
  }

  close(){
    this.dialogRef.close();
  }

  reset(){
    this.profileForm.reset();
    this.roles = [
      { checked: false, value: 'Global Gleason Admin' },
      { checked: false, value: 'User' },
      { checked: false, value: 'Customer Admin' },
      { checked: false, value: 'Global Interl Sales' },
    ];
    this.trailUser = false;
  }
}
