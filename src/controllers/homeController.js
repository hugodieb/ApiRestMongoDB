const express = require('express')
const authMiddleware = require('../middlewares/auth')

const router = express.Router()

router.get('', async (req, res) => {
    const user = req.session.user
    res.render("pages/home")
})

module.exports = app => app.use('/', router)
