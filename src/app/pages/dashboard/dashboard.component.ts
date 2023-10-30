import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {

  isOpen = false
  isShowPass = true
  isCheck = false
  ngOnInit(): void {
    
  }

  // toggleModal(){
  //   this.isOpen = !this.isOpen
  //   console.log(this.isOpen)
  // }

  showPass(){
    this.isCheck = !this.isCheck
  }


}
