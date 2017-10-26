const mongoose = require('mongoose')
const Poll = mongoose.model("Poll")

module.exports = {
    newPoll: (req, res) => {
        console.log('Making a poll with req.body of', req.body)
        let newPoll = new Poll(req.body)
        newPoll.save(err => {
            if (err) {
                console.log("API error making a new poll", err)
                res.status(400).json(err)
            } else {
                console.log("Added a new poll", req.body.question)
                res.status(200).json("All OK")
            }
        })
    },
    getAll: (req, res) => {
        console.log('Attempting to get all polls')
        Poll.find({}, (err, polls) => {
            if (err) {
                console.log("API error getting all polls", err)
                res.status(400).json(err)
            } else {
                console.log("Got all polls :)")
                res.status(200).json(polls)
            }
        })
    },
    getOne: () => {},
    updateOne: () => {},
    delete: (req, res) => {
        console.log('Deleting a poll', req.params.id)
        const user = req.body.user
        const pollId = req.params.id
        Poll.findById(pollId, (err, poll) => {
            if (err) { 
                console.log("We couldn't find that poll", err) 
                res.status(400).json(err)
            }
            else if (poll.creator == user) {
                console.log("User is good:", user)
                poll.remove((err)=>{
                    if (err) { 
                        console.log("We couldn't delete the. Sad.", err)
                        res.status(400).json(err) 
                    } else {
                        console.log("Delete success!")
                        res.status(200).json("All OK!")
                    }
                })
            } else {
                console.log("User didn't match")
                res.status(400).json("User attempting delete doesn't match poll author") 
            }
        })
        // Should contain poll ID and user's name
    }
}