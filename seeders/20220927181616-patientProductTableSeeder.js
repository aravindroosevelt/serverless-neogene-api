"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return Promise.all([
            queryInterface.bulkInsert(
                "PatientProduct",
                [
                    {
                        StudySubjectID: 1,
                        TaskID: 14,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        StudySubjectID: 1,
                        TaskID: 17,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        StudySubjectID: 1,
                        TaskID: 18,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        StudySubjectID: 1,
                        TaskID: 20,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        StudySubjectID: 1,
                        TaskID: 21,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        StudySubjectID: 1,
                        TaskID: 23,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        StudySubjectID: 1,
                        TaskID: 24,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        StudySubjectID: 1,
                        TaskID: 27,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        StudySubjectID: 1,
                        TaskID: 28,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        StudySubjectID: 1,
                        TaskID: 29,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        StudySubjectID: 1,
                        TaskID: 36,
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
            queryInterface.bulkDelete("PatientProduct", null, {}),
        ]);
    },
};
