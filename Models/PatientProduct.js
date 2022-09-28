const { DataTypes } = require("sequelize");
const { db } = require("../db");

const PatientProduct = db.define(
    "PatientProduct",
    {
        ID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        StudySubjectID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        TaskID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        LotNumber: {
            type: DataTypes.STRING,
            unique: true,
        },
    },
    {
        freezeTableName: true,
    }
);

module.exports = PatientProduct;
