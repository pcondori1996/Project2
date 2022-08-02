const router = require('express').Router()
const {User} = require('../../models')


// host/api/users...

// This route crates a new user
router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body)
        console.log(userData);
        req.session.save(() => {
            req.session.userId = userData.id;
            req.session.username = userData.username
            req.session.logged_in = true

            res.status(200).json(userData)
        })
    } catch (err) {
        res.status(400).json(err)
    }
})
// This route logs users in
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {
                username: req.body.username
            }
        })

        if(!userData) {
            res.status(400).json({message: 'Incorrect username or password'})
            return
        }
        const checkedPassword = await userData.validatePassword(req.body.password)

        if(!checkedPassword) {
            res.status(400).json({message: 'Incorrect username or pasword, please try again.'})
            return
        }

        req.session.save(() => {
            req.session.userId = userData.id
            req.session.username = userData.username
            req.session.logged_in = true

            res.json({user: userData, message: 'You are now logged in'})
        })
    } catch (err) {
        res.status(400).json(err)
    }
})
// This route logs users out
router.post('/logout', (req, res) => {
    if(req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end()
        })
    } else {
        res.status(404).end()
    }
})

module.exports = router