const router = require('express').Router()
const {User, Post} = require('../../models')
const {update} = require('../../models/User')
const withAuth = require('../../utils/auth')

// host/api/posts/...

// This route creates a new post
router.post('/', withAuth, async (req, res) => {
    try {
        const newPost = await Post.create({
            ...req.body,
            userId: req.session.userId,
        })

        res.status(200).json(newPost)
    } catch(err) {
        res.status(400).json(err)
    }
})

// This route deletes a user based on post_id
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const postToBeDeleted = await Post.destroy({
            where: {
                id: req.params.id
            }
        })

        if(!postToBeDeleted) {
            res.status(404).json({message: 'No posts with this ID'})
            return
        }

        res.status(200).json(postToBeDeleted)
    } catch(err) {
        res.status(500).json(err)
    }
})

// This route updates a post based on post_id
router.put('/:id', withAuth, async (req, res) => {
    Post.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then((post) => {
        res.json(post)
    })
    .catch((err) => {
        res.json(err)
    })
})

router.get('/', async (req, res) => {
    if (req.query.category && req.query.user) {
        const user = await User.findOne({where: {username: req.query.user}});
        const posts = await Post.findAll({
            where: {
                userId: user.id,
                category: req.query.category
            }
        });
        const serializedPosts = posts.map(post => post.get({ plain: true }));
        res.status(200).json(serializedPosts);
    }
    else if (req.query.category) {
        const posts = await Post.findAll({
            where: {
                category: req.query.category
            }
        });
        const serializedPosts = posts.map(post => post.get({ plain: true }));
        res.status(200).json(serializedPosts);
    }
    else if (req.query.user) {
        const user = await User.findOne({where: {username: req.query.user}});
        const posts = await Post.findAll({
            where: {
                userId: user.id
            }
        });
        const serializedPosts = posts.map(post => post.get({ plain: true }));
        res.render('search', {
            logged_in:req.session.logged_in,
            userId:req.session.userId,
            serializedPosts
        })
    }
});

module.exports = router