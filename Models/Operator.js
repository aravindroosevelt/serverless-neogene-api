const { DataTypes } = require("sequelize");
const { db } = require("../db");

const Operator = db.define(
    "Operator",
    {
        ID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        LName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        FName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        FullName: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Phone: {
            type: DataTypes.STRING,
        },
        FuncGrpID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        freezeTableName: true,
    }
);

module.exports = Operator;
