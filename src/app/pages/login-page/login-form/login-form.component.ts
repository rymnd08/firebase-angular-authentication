import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  LoginForm! : FormGroup
  constructor(private fb : FormBuilder, private firebase : FirebaseService, private router: Router){}
  ngOnInit(): void {
    this.LoginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [''],
    })
  }
  submit(){
    this.firebase.loginUser(this.LoginForm.get('email')?.value, this.LoginForm.get('password')?.value)
    .then(res =>{
      this.router.navigate(['/'])
    })
    .catch(err =>{
      console.log(err)
    })

  }
} 
