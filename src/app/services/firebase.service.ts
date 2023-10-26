import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../environments/environment';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut  } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  app = initializeApp(firebaseConfig)
  auth = getAuth()

  constructor() { }

  createUser(email: string, password: string){
   return createUserWithEmailAndPassword(this.auth, email, password)
  //  .then((userCredential) => {
  //   // Signed up 
  //   const user = userCredential.user;
  //   // ...
  // })
  }
  loginUser(email: any, password: any){
    return signInWithEmailAndPassword(this.auth, email, password)
    // .then((userCredential) => {
    //   // Signed in 
    //   const user = userCredential.user;
    //   // ...
    // })
    // .catch((error) => {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
  // });
  }
  
  signOut(){
    return signOut(this.auth)
    // .then(() => {
    //   // Sign-out successful.
    // }).catch((error) => {
    //   // An error happened.
    // });
  }

}
