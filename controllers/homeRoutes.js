const router = require('express').Router()
const { response } = require('express');
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

        res.render('landing', {now:new Date()
        });
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
            userId: req.session.userId,
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
                userId: req.session.userId,
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
                userId: req.session.userId,
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
                userId: req.session.userId,
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

// This takes users to the search page
router.get('/search', async (req,res) => {
    try {
        if(req.session.logged_in) {
            var serializedPosts = [];
            if (req.query.category && req.query.user) {
                const user = await User.findOne({where: {username: req.query.user}});
                const posts = await Post.findAll({
                    where: {
                        userId: user.id,
                        category: req.query.category
                    }
                });
                serializedPosts = posts.map(post => post.get({ plain: true }));
            }
            else if (req.query.category) {
                const posts = await Post.findAll({
                    where: {
                        category: req.query.category
                    }
                });
                serializedPosts = posts.map(post => post.get({ plain: true }));
            }
            else if (req.query.user) {
                const user = await User.findOne({where: {username: req.query.user}});
                const posts = await Post.findAll({
                    where: {
                        userId: user.id
                    }
                });
                serializedPosts = posts.map(post => post.get({ plain: true }));  
            }
            res.render('search', {
                logged_in:req.session.logged_in,
                userId:req.session.userId,
                serializedPosts
            })
        } else {
            res.redirect('/login')
        }
    } catch (err) {
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
                showLogout: true,
                userId: req.session.userId,
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

router.get('/recovery', async (req, res) => {
    try {
        res.render('recovery');
    } catch(err) {
        res.status(500).json(err);
    }
});
module.exports = router