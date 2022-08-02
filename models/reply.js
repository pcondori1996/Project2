const {Model, DataTypes} = require('sequelize')
const sequelize = require('../config/connection')

class Reply extends Model {}

Reply.init(
    {
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        time_posted: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'reply',
    }
)

module.exports = Reply