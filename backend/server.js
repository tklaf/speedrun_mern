const express = require('express')
const cors = require ('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

const connection = mongoose.connect('mongodb://localhost/speedrun', {
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})

const speedrunsRouter = require('./routes/speedruns')
const usersRouter = require('./routes/users')

app.use('/speedruns', speedrunsRouter)
app.use('/users', usersRouter)

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
})

module.exports = connection