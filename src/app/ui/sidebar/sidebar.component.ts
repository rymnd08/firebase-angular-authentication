import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "src/app/services/firebase.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  userEmail?: string;

  constructor(
    private firebase: FirebaseService,
  ) {}
  ngOnInit(): void {
    const currentUser = JSON.parse(window.sessionStorage.getItem("userInfo")!);
    this.userEmail = currentUser.email;
    this.firebase.onAuthStateChange()
  }

  logout(e: any) {
    e.preventDefault()
    this.firebase
      .signOut()
      .then((res) => {
        window.sessionStorage.clear();
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
