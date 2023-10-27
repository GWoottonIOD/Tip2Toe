const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
const Users = require("./users")

class Appt extends Model { }
//Sequelize will create this table if it doesn't exist on startup
Appt.init({
    id: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true
    },

    userID: {
        type: DataTypes.INTEGER, allowNull: true, required: false,
        references: {
            model: Users, //reference to another model
            key: "id", //column name of the referenced model
            indexes: [{ unique: true }],
        }
    },
    booking: {
        type: DataTypes.DATE, allowNull: true, required: false
    },
    duedate: {
        type: DataTypes.DATE, allowNull: true, required: false
    },
    total: {
        type: DataTypes.INTEGER, allowNull: false, required: false
    },
    paid: {
        type: DataTypes.BOOLEAN, allowNull: true, required: true
    },
    amount: {
        type: DataTypes.INTEGER, allowNull: false, required: true
    },
   
   
},
    {
        sequelize: sequelizeInstance, modelName: 'Appt', timestamps: true, freezeTableName: true
    }
)
module.exports = Appt;


