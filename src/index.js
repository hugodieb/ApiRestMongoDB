const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const path = require('path')
const session = require('express-session')
const flash = require('connect-flash')

app.use(session({
    secret: "secreto",
    resave: true,
    saveUninitialized: true
}))
app.use(flash())
app.use((req, res, next) => {
    res.locals.success_msg = req.flash("success_msg")
    res.locals.error_msg = req.flash("error_msg")
    res.locals.error = req.flash("error")
    res.locals.user = "mara"
    console.log("local " + res.locals.user)
    next()
})

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