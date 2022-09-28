"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        return Promise.all([
            queryInterface.bulkInsert(
                "Functionalgroup",
                [
                    {
                        FuncGrpName: "Supply Chain",
                        FuncGrpDesc: "Supply Chain",
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        FuncGrpName: "Clinical Site",
                        FuncGrpDesc: "Clinical Site",
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        FuncGrpName: "ClinOps",
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        FuncGrpName: "Courier",
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        FuncGrpName: "Manufacturing",
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        FuncGrpName: "Quality",
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                ],
                {}
            ),
        ]);
    },

    async down(queryInterface, Sequelize) {
        return Promise.all([
            queryInterface.bulkDelete("Functionalgroup", null, {}),
        ]);
    },
};
