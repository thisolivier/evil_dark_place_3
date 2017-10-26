import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { LoginService } from './../login.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private _login: LoginService,
    private _router: Router
  ) { }

  ngOnInit() {
    if (this._login.getUser()){
      console.log("User is already logged in")
      this._router.navigate(['dashboard'])
    }
  }

  processLogin(name) {
    console.log("Processing the submission of name", name)
    this._login.setUser(name)
  }

}
