// install dependencies
const cors          = require('cors')
const express       = require('express')
const bodyParser    = require('body-parser')
const db            = require('./db/db')

// create express app
const app           = express()

// CRUD
require('./route/index')(app, db)

// use dependencies
app.use(cors())
app.use(bodyParser.json())

//  listening server
app.listen(3000, () => console.log(`We are live on 3000 ...`))

