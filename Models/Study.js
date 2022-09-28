const { DataTypes } = require("sequelize");
const { db } = require("../db");

const Study = db.define(
    "Study",
    {
        StudyID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        StudyNumber: {
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: false,
        },
        ProgramID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        StudyName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        freezeTableName: true,
    }
);

module.exports = Study;
