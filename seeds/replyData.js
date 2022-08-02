const { Reply } = require('../models'); // requires the user model

const replyData = [
    {
        content: "We stan Yoda",
        postId: 2,
        userId: 2
    },
    {
        content: "Szeth is incredible!",
        postId: 1,
        userId: 4
    },
    {
        content: "Give me a shardblade!",
        postId: 1,
        userId: 3
    },
    {
        content: "I wish be lived longer",
        postId: 7,
        userId: 1
    },
    {
        content: "This movie sucked",
        postId: 7,
        userId: 2
    },
    {
        content: "Can't wait to read this one",
        postId: 3,
        userId: 1
    },
    {
        content: "4000 pages into the series",
        postId: 6,
        userId: 4
    }
];

const seedReplies = () => Reply.bulkCreate(replyData);

module.exports = seedReplies;