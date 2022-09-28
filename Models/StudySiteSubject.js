const { DataTypes } = require("sequelize");
const { db } = require("../db");
const StudySiteSubject = db.define(
    "StudySiteSubject",
    {
        ID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        StudyID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        ClinicalSiteID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        SubjectID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        DIN: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        COI: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        SubjectIDNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    },
    {
        freezeTableName: true,
    }
);

module.exports = StudySiteSubject;
