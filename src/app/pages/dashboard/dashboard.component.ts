import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userEmail?: string

  ngOnInit(): void {
   const currentUser = JSON.parse(window.sessionStorage.getItem('userInfo')!)
    this.userEmail = currentUser.email
  }


}
