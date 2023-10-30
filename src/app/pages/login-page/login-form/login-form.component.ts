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
  hasError = false
  errorMsg?: string
  
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
      const user = res.user
      const userInfo = {
        email: user.email,
        displayName : user.displayName,
        uid: user.uid,
        photoURL : user.photoURL,
        refreshToken: user.refreshToken,
        phoneNumber : user.phoneNumber
      }
      window.sessionStorage.setItem('userInfo', JSON.stringify(userInfo))
      this.router.navigate(['/dashboard'])
    })
    .catch(err =>{
      this.hasError = true
      this.errorMsg = err.message.replace('Firebase: ', '')

    })

  }
} 
