const router = require('express').Router()
const { Reply} = require('../../models')
const withAuth = require('../../utils/auth')

router.get('/', async (req, res) => {
    await Reply.findAll({})
    .then((replyData) => res.json(replyData))
    .catch(err => res.status(500).json(err))
})

router.post('/', withAuth, async (req, res) => {
    if(req.session) {
        await Reply.create({
            content: req.body.content,
            postId: req.body.postId,
            userId: req.body.userId
        })
        .then((replyData) => res.json(replyData))
        .catch(err => res.status(500).json(err))
    }
})

router.delete('/:id', withAuth, async (req, res) => {
    await Reply.destroy({
        where: {
            id: req.params.id
        }
    })
    .then((replyData) => {
        if(!replyData) {
            res.status(404).json({message: 'No comment with this id found'})
            return
        } else {
            res.json(replyData)
        }
        
    })
    .catch(err => res.status(500).json(err))
    
})


module.exports = router