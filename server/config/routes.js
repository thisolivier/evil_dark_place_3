const path = require('path')

const XXX_cont = require('./../controllers/XXX_cont')
// const user_cont = require('./../controllers/XXX2_cont')

module.exports = app => {
    app.post('/XXX', XXX_cont.newXXX)

    // // Use for Angular app
    // app.all("*", (req,res,next) => {
    //     res.sendFile(path.resolve("./static/dist/index.html"))
    // });
}