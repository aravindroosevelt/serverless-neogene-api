"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        return Promise.all([
            queryInterface.bulkInsert(
                "Study",
                [
                    {
                        StudyNumber: 101,
                        ProgramID: 1,
                        StudyName: "NT-125-101",
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },

                    {
                        StudyNumber: 102,
                        ProgramID: 2,
                        StudyName: "NT-175-101",
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                ],

                {}
            ),
        ]).catch((err) => console.log(err));
    },

    async down(queryInterface, Sequelize) {
        return Promise.all([queryInterface.bulkDelete("Study", null, {})]);
    },
};
