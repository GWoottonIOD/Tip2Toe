const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class Appt extends Model { }
//Sequelize will create this table if it doesn't exist on startup
Appt.init({
    id: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true
    },
    name: {
        type: DataTypes.STRING, allowNull: true, required: false
    },
    time: {
        type: DataTypes.INTEGER, allowNull: false, required: false
    }
},
    {
        sequelize: sequelizeInstance, modelName: 'Services', timestamps: false, freezeTableName: true
    }
)
module.exports = Appt;


