const { Post } = require('../models'); // requires the post model

const postData = [
    {
        title: "The Way of Kings",
        content: "Brandon Sanderson",
        // url: "https://www.amazon.com/Sanderson-Brandon-Author-Paperbound-24-May-2011/dp/B0052IG90K/ref=sr_1_3?crid=8V147FWIPGSE&keywords=the+way+of+kings&qid=1659455260&sprefix=the+way+of+king%2Caps%2C172&sr=8-3",
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
        // url: "https://www.amazon.com/Words-Radiance-Stormlight-Archive-Book-ebook/dp/B00DA6YEKS/ref=sxin_10_mbs_w_global_sims?content-id=amzn1.sym.167d0880-9da0-400b-938e-4382731a4102%3Aamzn1.sym.167d0880-9da0-400b-938e-4382731a4102&crid=8V147FWIPGSE&cv_ct_cx=the+way+of+kings&keywords=the+way+of+kings&pd_rd_i=B00DA6YEKS&pd_rd_r=d05cdc5c-049c-46b5-bb73-a7f60ec76efd&pd_rd_w=7CDXl&pd_rd_wg=IhQVO&pf_rd_p=167d0880-9da0-400b-938e-4382731a4102&pf_rd_r=YEVZ337KYT0HHGP629FW&qid=1659455260&sprefix=the+way+of+king%2Caps%2C172&sr=1-1-9e7645f9-2d19-4bff-863e-f6cdbe50f990",
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