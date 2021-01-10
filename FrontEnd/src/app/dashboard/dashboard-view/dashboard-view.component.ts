import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.css']
})
export class DashboardViewComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts;

  interalVsExternal:number[] = [1,2];
  chartOptions: Highcharts.Options = {
    series: [{
      data: this.interalVsExternal,
      type: 'bar',
    }],
    xAxis: {
      categories:["Internal","External"]
    },
    title : {
      text: "Interl vs External"
    }
  };


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe(users=> {
        this.interalVsExternal.push(users.filter(x => x.customer_type === "1").length);
        this.interalVsExternal.push(users.filter(x => x.customer_type === "2").length);
      })
  }
 
}
