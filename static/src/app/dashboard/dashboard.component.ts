import { Component, OnInit } from '@angular/core';
import { LoginService } from './../login.service'
import { PollsService } from './../polls.service'
import { Router } from '@angular/router'
import { Poll } from './../poll'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  polls:Array<Poll>
  currUser:String

  constructor(
    private _login: LoginService,
    private _polls: PollsService,
    private _router: Router
  ) { }

  ngOnInit() {
    if (!this._login.getUser()){
      this._router.navigate(['/'])
    }
    this.currUser = this._login.getUser()
    var pollProm = this._polls.getAll()
    pollProm.then(polls => {
      console.log("We got data back from the service", polls)
      this.polls = polls
    })
  }

  processLogout(){
    this._login.unsetUser()
  }

  processDelete(pollID){
    console.log("User is trying to delete poll id", pollID)
    let delProm = this._polls.deleteOne(pollID, this.currUser)
    delProm.then( data => {
      var pollProm = this._polls.getAll()
      pollProm.then(polls => {
        console.log("Polls updated")
        this.polls = polls
      })
    })
  }
}
