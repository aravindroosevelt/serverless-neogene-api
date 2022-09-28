const { DataTypes } = require("sequelize");
const { db } = require("../db");

const Investigator = db.define(
    "Investigator",
    {
        ID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        FName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        LName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Designation: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        DisplayName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ISPrimary: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        Profession: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ClinicalSiteID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        freezeTableName: true,
    }
);

module.exports = Investigator;
