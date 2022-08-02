const User = require('./user')
const Post = require('./post')
const Reply = require('./reply')

Post.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
})
Post.hasMany(Reply, {
    foreignKey: 'postId',
    onDelete: 'CASCADE'
})
Reply.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
})

module.exports = { User, Post, Reply }