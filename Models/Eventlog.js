const { DataTypes } = require("sequelize");
const { db } = require("../db");

const Eventlog = db.define(
    "Eventlog",
    {
        ID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        StudySubTaskID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        OperatorID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        EventCateogry: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        patientproductID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        EventDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        Status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Comments: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        freezeTableName: true,
    }
);

module.exports = Eventlog;
