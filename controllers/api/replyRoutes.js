const router = require('express').Router()
const { Reply} = require('../../models')
const withAuth = require('../../utils/auth')

// host/api/replies/...

// This route gets all replies
router.get('/', async (req, res) => {
    await Reply.findAll({})
    .then((replyData) => res.json(replyData))
    .catch(err => res.status(500).json(err))
})
// This route creates a new reply
router.post('/', withAuth, async (req, res) => {
    if(req.session) {
        await Reply.create({
            content: req.body.content,
            postId: req.body.postId,
            userId: req.session.userId,
        })
        .then((replyData) => res.json(replyData))
        .catch(err => res.status(500).json(err))
    }
})
// This route deletes a reply based on reply_id
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