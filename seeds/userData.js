const { User } = require('../models'); // requires the user model

const userData = [
    {
        username: 'Hunter',
        password: 'hunter1234',
        email: 'hunter@email.com'
    },
    {
        username: 'Charles',
        password: 'charles1234',
        email: 'charles@email.com'
    },
    {
        username: 'Josh',
        password: 'josh1234',
        email: 'josh@email.com'
    },
    {
        username: 'Paulo',
        password: 'paulo1234',
        email: 'paulo@email.com'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;