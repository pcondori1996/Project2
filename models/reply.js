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
<<<<<<< HEAD
        sequelize
=======
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
>>>>>>> dc3f3e26d33752dddafb4af283a4c6361d39ea6e
    }
)

module.exports = Reply