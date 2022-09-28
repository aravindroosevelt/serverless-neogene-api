"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        return Promise.all([
            queryInterface.bulkInsert(
                "Process",
                [
                    {
                        ProcName: "Preparation",
                        ProcLabel: "P",
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        ProcName: "Collection",
                        ProcLabel: "C",
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        ProcName: "Manufacturing",
                        ProcLabel: "M",
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        ProcName: "Delivery",
                        ProcLabel: "D",
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        ProcName: "Infusion",
                        ProcLabel: "I",
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                ],
                {}
            ),
        ]);
    },

    async down(queryInterface, Sequelize) {
        return Promise.all([queryInterface.bulkDelete("Process", null, {})]);
    },
};
