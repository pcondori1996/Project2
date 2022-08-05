const { Reply } = require('../models'); // requires the user model

const replyData = [
    {
        content: "Perfect gift for any age!",
        postId: 3,
        userId: 2
    },
    {
        content: "Flight simulation is unreal on this one!",
        postId: 39,
        userId: 3
    },
    {
        content: "My 10 year old likes it, but I think it may be a little complex for his age and below.",
        postId: 3,
        userId: 3
    },
    {
        content: "I want this!!!!!",
        postId: 28,
        userId: 1
    },
    {
        content: "Best lego video game on the market!",
        postId: 1,
        userId: 2
    },
    {
        content: "Great read! Highly recommend!!",
        postId: 34,
        userId: 1
    },
    {
        content: "No joke, this thing is super rare!!",
        postId: 26,
        userId: 4
    },
    {
        content: "I give it a 3/5…missing key plot info",
        postId: 27,
        userId: 3
    },
    {
        content: "Great spinoff with lots of character development!",
        postId: 37,
        userId: 4
    },
    {
        content: "Awesome addition to this incredible series",
        postId: 30,
        userId: 4
    },
    {
        content: "Love it, got one for Father's Day last year!",
        postId: 23,
        userId: 1
    },
    {
        content: "This game sucks!",
        postId: 3,
        userId: 2
    },
    {
        content: "I can't believe this thing is valued so high? It's just a piece of metal?!?",
        postId: 2,
        userId: 1
    },
    {
        content: "That's a lie! This thing is immense with plot info!",
        postId: 27,
        userId: 4
    },
    {
        content: "Agreed!",
        postId: 30,
        userId: 2
    },
    {
        content: "Outstanding graphics and user interface!",
        postId: 18,
        userId: 4
    },
    {
        content: "Anybody know if I can buy this in a brick/mortar?",
        postId: 16,
        userId: 3
    },
    {
        content: "Classic!",
        postId: 5,
        userId: 1
    },
    {
        content: "I know this designer…great stuff!",
        postId: 6,
        userId: 2
    },
    {
        content: "My dad used to have this, but I think our dog ate it",
        postId: 10,
        userId: 1
    },
    {
        content: "Your food fresh and tasty, this lunchbox keeps!",
        postId: 2,
        userId: 4
    },
    {
        content: "I didn't really like this game.",
        postId: 7,
        userId: 1
    },
    {
        content: "What is the significance of this item that makes it so valuable?",
        postId: 33,
        userId: 2
    },
    {
        content: "Not bad, though I like the Rebel Files spinoff a lot more.",
        postId: 35,
        userId: 3
    },
    {
        content: "No doubt!",
        postId: 1,
        userId: 4
    },
    {
        content: "I've only ever seen a legit copy at a convention.",
        postId: 26,
        userId: 3
    },
    {
        content: "I think you can only find it online.",
        postId: 16,
        userId: 1
    },
    {
        content: "This game will consume your life",
        postId: 13,
        userId: 4
    },
    {
        content: "Best spinoff series out there, hands down!",
        postId: 24,
        userId: 3
    },
    {
        content: "I have this shirt in every size!",
        postId: 5,
        userId: 4
    }
];

const seedReplies = () => Reply.bulkCreate(replyData);

module.exports = seedReplies;