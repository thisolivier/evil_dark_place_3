const path = require('path')

const poll_cont = require('./../controllers/poll_cont')

module.exports = app => {
    app.post('/poll', poll_cont.newPoll)

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./static/dist/index.html"))
    });
}