import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { UserService } from '../user.service';
import { User } from '../user/user';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css']
})
export class UserDialogComponent implements OnInit {

  profileForm: FormGroup ;
  constructor(private userService: UserService) { }

  costomers = [
    {value: '1', viewValue: 'Internal'},
    {value: '2', viewValue: 'External'}
  ];

  roles =[
    {checked:false, value:"Global Gleason Admin"},
    {checked:false, value:"User"},
    {checked:false, value:"Customer Admin"},
    {checked:false, value:"Global Interl Sales"},
  ]
  selectedCustomer = "";
  trailUser = false;
 
  ngOnInit(): void {
    this.profileForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      username: new FormControl(''),
      email: new FormControl(''),
    });
  }

  onSave() {

    let user: User = {
      first_name : this.profileForm.value.firstName,
      last_name :   this.profileForm.value.lastName,
      username : this.profileForm.value.username,
      email : this.profileForm.value.email,
      trail_user : this.trailUser,
      role : "",
      customer_type : this.selectedCustomer,
    }
  }


  TrainUsertoggle(value:boolean) {
    this.trailUser = value;
  }
  changeCustomer(event: MatSelectChange){
    this.selectedCustomer = event.value;
  }
}
