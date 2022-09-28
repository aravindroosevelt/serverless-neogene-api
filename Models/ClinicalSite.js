const { DataTypes } = require("sequelize");
const { db } = require("../db");

const ClinicalSite = db.define(
    "ClinicalSite",
    {
        ID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        Name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        Address1: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Address2: {
            type: DataTypes.STRING,
        },
        City: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        State: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Zip: {
            type: DataTypes.STRING,
        },
        Country: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        freezeTableName: true,
    }
);

module.exports = ClinicalSite;
