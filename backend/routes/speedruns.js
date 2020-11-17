const router = require('express').Router()
const Speedrun = require('../models/speedrun.model')

router.route('/').get((req, res) =>{
    Speedrun.find()
    .then(speedruns => res.json(speedruns))
    .catch(e => res.status(400).json('Error: ' + e))
})

router.route('/add').post((req, res) =>{
    const gameTitle = req.body.gameTitle
    const username = req.body.username
    const timeTookH = Number(req.body.timeTookH)
    const timeTookM = Number(req.body.timeTookM)
    const timeTookS = Number(req.body.timeTookS)
    const timeTookMS = Number(req.body.timeTookMS)
    const datePlayed = Date.parse(req.body.datePlayed)
    const platformPlayed = req.body.platformPlayed


    const newSpeedrun = new Speedrun({
        gameTitle,
        username,
        timeTookH,
        timeTookM,
        timeTookS,
        timeTookMS, 
        datePlayed,
        platformPlayed,
    })
    newSpeedrun.save()
    .then(() => res.json('Speedrun added'))
    .catch(e => res.status(400).json('Error: ' + e))
})

router.route('/:id').get((req, res) =>{
    Speedrun.findById(req.params.id)
    .then(speedrun => res.json(speedrun))
    .catch(e => res.status(400).json('Error: ' + e))
})

router.route('/:id').delete((req, res) =>{
    Speedrun.findByIdAndDelete(req.params.id)
    .then(() => res.json('Speedrun Deleted'))
    .catch(e => res.status(400).json('Error: ' + e)) 
})

router.route('/update/:id').post((req, res) =>{
    Speedrun.findById(req.params.id)
    .then(speedrun =>{
        speedrun.gameTitle = req.body.gameTitle
        speedrun.username = req.body.username
        speedrun.timeTookM = Number(req.body.timeTookM)
        speedrun.timeTookS = Number(req.body.timeTookS)
        speedrun.timeTookH = Number(req.body.timeTookH)
        speedrun.timeTookMS = Number(req.body.timeTookMS)
        speedrun.datePlayed = Date.parse(req.body.datePlayed)
        speedrun.platformPlayed = req.body.platformPlayed

        speedrun.save()
        .then(() => res.json('Speedrun updated'))
        .catch(e => res.status(400).json('Error: ' + e))
    })
    .catch(e => res.status(400).json('Error: ' + e))
})

module.exports = router