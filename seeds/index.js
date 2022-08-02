const sequelize = require('../config/connection');
const seedUser = require('./userData');
const seedPost = require('./postData');
const seedReply = require('./replyData');

const seedAll = async () => {
    await sequelize.sync({ force : true });

    await seedUser();
    await seedPost();
    await seedReply();

    process.exit(0);
};

seedAll();