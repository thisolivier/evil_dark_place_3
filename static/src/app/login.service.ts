import { Injectable } from '@angular/core';
import { Router } from '@angular/router'

@Injectable()
export class LoginService {

  constructor(private _router: Router) { }

  setUser(name){
    localStorage.setItem('currUser', JSON.stringify(name))
    console.log('User logged in:', name);
    this._router.navigate(['dashboard'])
  }

  unsetUser(){
    console.log('Logging out', JSON.parse(localStorage.getItem('currUser')))
    localStorage.clear()
    this._router.navigate(['/'])
  }

  getUser(){
    let currUser = JSON.parse(localStorage.getItem('currUser'))
    if (currUser){
      console.log("Our user is", currUser)
      return currUser
    }
    console.log("No-one is logged in yet")
    return false
  }
}
