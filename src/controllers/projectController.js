const express = require('express')
const authMiddleware = require('../middlewares/auth')

const router = express.Router()

router.use(authMiddleware)

router.get('/', (req, res) => {
    console.log("ususario " + req.session.token)
    console.log("ususaria " + res.locals.user)
    res.send({ok: true})
})

module.exports = app => app.use('/projects', router)
