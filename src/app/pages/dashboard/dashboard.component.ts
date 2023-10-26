import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userEmail?: string
  constructor(private firebase: FirebaseService, private router: Router) {
    
  }
  ngOnInit(): void {
   const currentUser = JSON.parse(window.sessionStorage.getItem('userInfo')!)
    this.userEmail = currentUser.email
  }

  logout(){
    this.firebase.signOut()
    .then(res =>{
      this.router.navigate(['/login'])
    })
    .catch(error=>{
      console.log(error)
    })
  }


}
