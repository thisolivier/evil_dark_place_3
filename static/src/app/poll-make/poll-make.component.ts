import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Http } from '@angular/http'

import { LoginService } from './../login.service'
import { PollsService } from './../polls.service'
import { Poll } from './../poll'


@Component({
  selector: 'app-poll-make',
  templateUrl: './poll-make.component.html',
  styleUrls: ['./poll-make.component.css']
})
export class PollMakeComponent implements OnInit {
  option: Array<String> = []
  question: String

  constructor(
    private _login: LoginService,
    private _polls: PollsService,
    private _router: Router,
    private _http: Http
  ) { }

  ngOnInit() {
    if (!this._login.getUser()){
      this._router.navigate(['/'])
    }
  }

  processPoll(){
    console.log("Woooo")
    let newPoll = new Poll()
    newPoll.creator = this._login.getUser()
    newPoll.question = this.question
    newPoll.options = this.option.map(this.mapOptions)
    console.log("New poll being sent to service", newPoll)
    this._polls.addPoll(newPoll)
  }
  
  private mapOptions(option){
    return {
      name: String(option), 
      count: 0
    }
  }
}
