const { DataTypes } = require("sequelize");
const { db } = require("../db");

const Process = db.define(
    "Process",
    {
        ProcID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        ProcName: {
            type: DataTypes.ENUM(
                "Preparation",
                "Collection",
                "Manufacturing",
                "Delivery",
                "Infusion"
            ),
            allowNull: false,
        },
        ProcLabel: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        freezeTableName: true,
    }
);

module.exports = Process;
