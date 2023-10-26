import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {
  SignUpForm! : FormGroup
  errorMsg?: string
  hasError =  false
  constructor(private fb: FormBuilder, private firebase: FirebaseService, private router: Router) {
    
  }

  ngOnInit(): void {
    this.SignUpForm = this.fb.group({
      email: [''],
      password: ['']
    })
  }

  submit(){
    this.firebase.createUser(this.SignUpForm.get('email')?.value, this.SignUpForm.get('password')?.value)
      .then(user =>{
        console.log(user)
        this.router.navigate(['/login'])
      })
      .catch(err =>{
        this.errorMsg = err.message.replace('Firebase: ', '')
        this.hasError = true
      })
    }

}
