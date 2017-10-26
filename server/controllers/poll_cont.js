const mongoose = require('mongoose')
const Poll = mongoose.model("Poll")

module.exports = {
    newPoll: (req, res) => {
        console.log('the body is', req.body)
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
    getAll: () => {},
    getOne: () => {},
    updateOne: () => {},
    delete: () => {}
}