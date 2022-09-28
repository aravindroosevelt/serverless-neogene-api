const { DataTypes } = require("sequelize");
const { db } = require("../db");

const Tasks = db.define(
    "Tasks",
    {
        TaskID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        ProcessID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        FuncGrpID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        ExecOrder: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        ProcOrder: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        TaskName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        TaskDesc: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        PrintLabel: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        PrintLabelID: {
            type: DataTypes.INTEGER,
        },
        ScanRequired: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        ScanLabelID: {
            type: DataTypes.INTEGER,
        },
    },
    {
        freezeTableName: true,
    }
);

module.exports = Tasks;
