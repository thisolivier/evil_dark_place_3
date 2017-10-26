import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { Http } from '@angular/http'

import { LoginService } from './../login.service'
import { PollsService } from './../polls.service'
import { Poll } from './../poll'

@Component({
  selector: 'app-poll-use',
  templateUrl: './poll-use.component.html',
  styleUrls: ['./poll-use.component.css']
})
export class PollUseComponent implements OnInit {

  poll:any
  pollId:String

  constructor(
    private _login: LoginService,
    private _polls: PollsService,
    private _router: Router,
    private _activeRoute: ActivatedRoute,
    private _http: Http
  ) { }

  ngOnInit() {
    if (!this._login.getUser()){
      this._router.navigate(['/'])
    }
    this._activeRoute.paramMap.subscribe(this.getPol)
  }

  getPol = (params = null) => {
    if (params) {
      this.pollId = params.get('id')
    }
    console.log("Getting poll of ID", this.pollId)
    let pollProm = this._polls.getOne(this.pollId)
    pollProm.then(onePoll => {
      console.log("We got a poll back", onePoll)
      this.poll = onePoll
    })
  }

  processVote(id){
    console.log("Wooo! We are going to vote SO HARD!!")
    const optID = id
    const pollID = this.poll._id
    let voteProm = this._polls.vote(pollID, optID)
    voteProm.then(data => {
      this.getPol()
    })
  }

}
