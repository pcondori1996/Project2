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
            type: DataTypes.TEXT
        },
        time_posted: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        url: {
            type: DataTypes.TEXT,
            isUrl: true, 
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'post',
    }
)

module.exports = Post