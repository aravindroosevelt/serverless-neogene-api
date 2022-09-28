"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        return Promise.all([
            queryInterface.bulkInsert(
                "Program",
                [
                    {
                        ProgramName: "NT-125",
                        ProgramLabel: "125",
                        ProgramDesc: "",
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        ProgramName: "NT-175",
                        ProgramLabel: "175",
                        ProgramDesc: "",
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                ],
                {}
            ),
        ]);
    },

    async down(queryInterface, Sequelize) {
        return Promise.all([queryInterface.bulkDelete("Program", null, {})]);
    },
};
