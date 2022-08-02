const {Model, DataTypes} = require('sequelize')
const sequelize = require('../config/connection')

class Reply extends Model {}

Reply.init(
    {
        content: {
            type: DataTypes.STRING,
            allowNull: false
        },
        time_posted: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
    },
    {
        sequelize
    }
)

module.exports = Reply