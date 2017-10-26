const path = require('path')

const poll_cont = require('./../controllers/poll_cont')

module.exports = app => {
    app.post('/api/poll', poll_cont.newPoll)
    app.post('/api/poll/:id', poll_cont.castVote)

    app.get('/api/poll', poll_cont.getAll)
    app.get('/api/poll/:id', poll_cont.getOne)

    app.delete('/api/poll/:id', poll_cont.delete)

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./static/dist/index.html"))
    });
}