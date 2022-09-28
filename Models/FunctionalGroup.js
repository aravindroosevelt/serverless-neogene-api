const { DataTypes } = require("sequelize");
const { db } = require("../db");

const FunctionalGroup = db.define(
    "Functionalgroup",
    {
        FuncGrpID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        FuncGrpName: {
            type: DataTypes.ENUM(
                "Supply Chain",
                "Clinical Site",
                "ClinOps",
                "Courier",
                "Manufacturing",
                "Quality"
            ),
            allowNull: false,
        },
        FuncGrpDesc: {
            type: DataTypes.STRING,
        },
    },
    {
        freezeTableName: true,
    }
);

module.exports = FunctionalGroup;
