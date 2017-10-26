const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PollSchema = mongoose.Schema({
    creator: {type: String, required: true},
    question: {type: String, required: true},
    options: [{
        name: {type: String, required: true},
        count: {type: Number, Default: 0}
    }]
}, {timestamps: true})

mongoose.model("Poll", PollSchema)