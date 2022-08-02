const {Model, DataTypes} = require('sequelize')
const sequelize = require('../config/connection')

class Post extends Model {}

Post.init(
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING
        },
        time_posted: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        category: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        url: {
            type: DataTypes.STRING,
            isUrl: true, 
        }
    },
    {
        sequelize
    }
)

module.exports = Post