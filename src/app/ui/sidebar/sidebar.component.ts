import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FirebaseService } from "src/app/services/firebase.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit {
  userEmail?: string;
  userName?: string;

  constructor(private firebase: FirebaseService, private router: Router) {}
  ngOnInit(): void {
    const currentUser = JSON.parse(window.sessionStorage.getItem("userInfo")!);
      this.userEmail = currentUser.email;
      const user = currentUser.email.split("@");
      this.userName = user[0];
  }

  logout(e: any) {
    e.preventDefault();
    this.firebase
      .signOut()
      .then((res) => {
        window.sessionStorage.clear();
        this.firebase.onAuthStateChange();
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
