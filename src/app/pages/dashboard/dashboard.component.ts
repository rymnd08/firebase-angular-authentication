import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {

  cards = [1,2,3,4,5,6,7,8,9,10]
  todos: any
  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/todos')
    .subscribe({
      next: (res) =>{
        console.log(res)
        this.todos = res
      },
      error: (err) => console.log(err)
    })
  }




}
