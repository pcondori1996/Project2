const router = require('express').Router()
const {Post} = require('../../models')
const {update} = require('../../models/User')
const withAuth = require('../../utils/auth')

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

module.exports = router