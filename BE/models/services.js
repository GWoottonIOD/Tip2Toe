const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class Services extends Model { }
//Sequelize will create this table if it doesn't exist on startup
Services.init({
    id: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true
    },
    name: {
        type: DataTypes.STRING, allowNull: false, required: true
    },
    time: {
        type: DataTypes.INTEGER, allowNull: false, required: true
    },
    cost: {
        type: DataTypes.INTEGER, allowNull: false, required: true
    }
},
    {
        sequelize: sequelizeInstance, modelName: 'Services', timestamps: false, freezeTableName: true
    }
)
module.exports = Services;


