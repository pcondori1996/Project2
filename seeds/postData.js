const { Post } = require('../models'); // requires the post model

const postData = [
    {
        title: "The Way of Kings",
        content: "Brandon Sanderson",
        category: "Stormlight Archives",
        userId: 2
    },
    {
        title: "Empire Strikes Back",
        content: "Try not. Do or do not. There is no try.",
        category: "Yoda",
        userId: 3
    },
    {
        title: "Words of Radiance",
        content: "Brandon Sanderson",
        category: "Stormlight Archives",
        userId: 2
    },
    {
        title: "Oathbringer",
        content: "Brandon Sanderson",
        category: "Stormlight Archives",
        userId: 2
    },
    {
        title: "Empire Strikes Back",
        content: "Luminous beings we are, not this crude matter.",
        category: "Yoda",
        userId: 4
    },
    {
        title: "Rhythm of War",
        content: "Brandon Sanderson",
        category: "Stormlight Archives",
        userId: 2
    },
    {
        title: "The Phantom Menace",
        content: "Your focus determines your reality.",
        category: "Qui-Gon Jinn",
        userId: 3
    },
    {
        title: "A New Hope",
        content: "Your eyes can deceive you; don't trust them.",
        category: "Obi-Wan Kenobi",
        userId: 1
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;