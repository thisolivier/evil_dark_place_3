const mongoose = require('mongoose')
const YYY = mongoose.model("YYY")

module.exports = {
    newXXX: (req, res) => {
        console.log('the body is', req.body)
        let newYYY = new YYY(req.body)
        newYYY.save(err => {
            if (err) {
                console.log("API error making a new XXX", err)
                res.status(400).json(err)
            } else {
                console.log("Added a new XXX called", req.body.name)
                res.status(200).json("All OK")
            }
        })
    },
    getAll: () => {},
    getOne: () => {},
    updateOne: () => {},
    delete: () => {}
}