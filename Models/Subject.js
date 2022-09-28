const { DataTypes } = require("sequelize");
const { db } = require("../db");

const Subject = db.define(
    "Subject",
    {
        SubjectID: {
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
        DOB: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        Country: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        freezeTableName: true,
    }
);

module.exports = Subject;
