const express = require('express')
const bodyparser = require('body-parser')
const path = require('path')

const app = express()

//set up template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//static files
app.use(express.static('./src/public'))

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))

require('./controllers/authController')(app)
require('./controllers/projectController')(app)

//listen to port
app.listen(3000)