const { DataTypes } = require("sequelize");
const { db } = require("../db");

const Program = db.define(
    "Program",
    {
        ProgramID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        ProgramName: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        ProgramLabel: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ProgramDesc: {
            type: DataTypes.STRING,
        },
    },
    {
        freezeTableName: true,
    }
);

module.exports = Program;
