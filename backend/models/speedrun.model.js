const mongoose = require('mongoose')
const {Schema, model} = mongoose

const defaultToZero = {
    type: Number,
    default: 0,
    required: true,
}

const speedrunSchema = new Schema({
    gameTitle: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required:true
    },
    timeTookH: defaultToZero,
    timeTookM: defaultToZero,
    timeTookS: defaultToZero,
    timeTookMS: defaultToZero,
    image: String,
    datePlayed: {
        type: Date,
        default: Date.now,
        required: true,
    },
    platformPlayed: {
        type: String,
        required: true,
    },
    category: String
}, {
    timestamps:true
})

const Speedrun = model('Speedrun', speedrunSchema)

module.exports = Speedrun