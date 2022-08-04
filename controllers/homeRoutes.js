const router = require('express').Router()
const e = require('express');
const {Post , User, Reply} = require('../models')
const withAuth = require('../utils/auth')

// These are routes that go into the URL. They are not for fetch requests.

// This takes users to the homepage
router.get('/', async (req, res) => {
    try {

        if (req.session.logged_in) {
            res.redirect('/forum');
            return
        }

        res.render('landing');
    } catch (err) {
        res.status(500).json(err)
    }
})

// This takes users to an individual post, based on post_id
router.get('/post/:id', async (req, res) => {
    try {
        const postFromId = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username']
                },
                {
                    model: Reply,
                    include: [User]
                }
            ]
        })

        const post = postFromId.get({plain: true})
        console.log(post)

        res.render('post', {
            post,
            logged_in: req.session.logged_in
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

// This takes users to login page
router.get('/login', (req,res) => {
    if (req.session.logged_in) {
        res.redirect('/forum')
        return
    }

    res.render('login')
})
// This takes uers to registration page
router.get('/register', (req,res) => {
    if (req.session.logged_in) {
        res.redirect('/forum')
        return
    }

    res.render('register')
})
// This takes users to dashboard
router.get('/forum', async (req, res) => {
    try {
        if(req.session.logged_in) {
            const allUserPosts = await Post.findAll({
                include: [
                    {
                        model: User,
                        attributes: ['username']
                    }
                ]
            })
    
            const allUserPostsSerialized = allUserPosts.map((post) => post.get({
                plain: true
            }))
            // flips the array so that the most recent posts appear at the top of the page
            allUserPostsSerialized.reverse();
            // renders the forum page, and sends the posts to the handlebars logic
            res.render('forum', {
                allUserPostsSerialized,
                logged_in: req.session.logged_in
            })
        } else {
            res.redirect('/login')
        }

    } catch (err) {
        res.status(500).json(err)
    } 
})
// This takes users to the writepost page
router.get('/writepost', async (req,res) => {
    try {
        if(req.session.logged_in) {
            res.render('writePost', {
                logged_in: req.session.logged_in
            })
        } else {
            res.redirect('/login')
        }
    } catch (err) {
        res.status(500).json(err)
    }
})
// Thsi takes users to the edit post based on post_id
router.get('/editpost/:id', async (req, res) => {
    try {
        if(req.session.logged_in) {
            const postFromId = await Post.findByPk(req.params.id);
            const postSerialized = postFromId.get({ plain: true });

            res.render('editPost', {
                postSerialized,
                logged_in: req.session.logged_in
            })
        } else {
            res.redirect('/login')
        }
    } catch(err) {
        res.status(500).json(err)
    }
})

router.get('/profile/:id', async (req, res) => {
    try {
        if(req.session.logged_in && req.session.userId == req.params.id) {
            const userPosts = await Post.findAll({
                where: {user_id: req.params.id} 
            })
            serializedPosts = userPosts.map(post => post.get({ plain: true}));
            serializedPosts.reverse();
            res.render('profile', {
                serializedPosts,
                logged_in: req.session.logged_in
            })
        } else {
            res.redirect('/login')
        }
    } catch(err) {
        res.status(500).json(err)
    }
})

module.exports = router