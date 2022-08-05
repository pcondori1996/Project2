const router = require('express').Router()
const userRoutes = require('./userRoutes')
const postRoutes = require('./postRoutes')
const replyRoutes = require('./replyRoutes')
const mailRoutes= require('./mailRoutes')

router.use('/users', userRoutes)
router.use('/posts', postRoutes)
router.use('/replies', replyRoutes)
router.use('/mail', mailRoutes)

module.exports = router