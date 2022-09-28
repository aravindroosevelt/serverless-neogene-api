const { DataTypes } = require("sequelize");
const { db } = require("../db");

const StudySubjectTasks = db.define(
    "StudySubjectTasks",
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
        StartDate: {
            type: DataTypes.DATE,
        },
        EndDate: {
            type: DataTypes.DATE,
        },
        Status: {
            type: DataTypes.ENUM("WIP", "Completed", "Validation"),
        },
        VerificationReq: {
            type: DataTypes.BOOLEAN,
        },
    },
    {
        freezeTableName: true,
    }
);

module.exports = StudySubjectTasks;
