import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { Http } from '@angular/http'
import 'rxjs'
import 'rxjs/add/operator/map'

@Injectable()
export class PollsService {

  constructor(
    private _http:Http,
    private _router: Router,
  ) { }

  getAll(){
    console.log("Polling service getting all polls")
    let pollProm = this._http.get('/api/poll').map(data => data.json()).toPromise()
    pollProm.catch(err => {
      console.log("We failed to get polls form API", err)
      alert("We could't get the polls :(")
    })
    return pollProm
  }

  getOne(id){
    console.log("Polling service getting a new poll", id)
    let pollProm = this._http.get(`/api/poll/${id}`).map(data => data.json()).toPromise()
    pollProm.catch(err => {
      console.log("We failed to get the poll from the API", err)
      alert("We could't get your poll :(")
    })
    return pollProm
  }

  addPoll(poll){
    console.log("Polling service making new poll")
    this._http.post('/api/poll', poll).toPromise()
    .then( data => {
      console.log("Woo! The API made a new poll")
      this._router.navigate(['dashboard'])
    })
    .catch( err => {
      console.log("The API failed to save our new poll", err)
      alert("Sorry, we couldn't save that poll :(")
    })
  }

  deleteOne(pollID, userName){
    console.log('Service attempting to delete poll', pollID)
    let payload = {
      user: userName
    }
    let delProm = this._http.delete(`/api/poll/${pollID}`, {body: payload}).toPromise()
    delProm.catch(err => {
      console.log("Service error in deleting poll", err)
    })
    delProm.then(data => {
      console.log("Service win in deleting poll!")
    })
    return delProm
  }

  vote(pollID, optionID){
    console.log("Service attempting to cast vote", pollID, optionID)
    let voteProm = this._http.post(`/api/poll/${pollID}`, {option: optionID}).toPromise()
    voteProm.catch(err => {
      console.log("Service error in voting", err)
    })
    voteProm.then(data => {
      console.log("Service win in voting!")
    })
    return voteProm
  }
}
