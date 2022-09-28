"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return Promise.all([
            queryInterface.bulkInsert(
                "StudySiteSubject",
                [
                    {
                        StudyID: 1,
                        ClinicalSiteID: 2,
                        SubjectID: 3,
                        DIN: "12343333",
                        COI: "12343333",
                        SubjectIDNumber: "125101001",
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        StudyID: 1,
                        ClinicalSiteID: 2,
                        SubjectID: 4,
                        DIN: "12344444",
                        COI: "12344444",
                        SubjectIDNumber: "125101002",
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        StudyID: 2,
                        ClinicalSiteID: 1,
                        SubjectID: 1,
                        DIN: "12341111",
                        COI: "12341111",
                        SubjectIDNumber: "175101001",
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        StudyID: 2,
                        ClinicalSiteID: 1,
                        SubjectID: 2,
                        DIN: "12342222",
                        COI: "12342222",
                        SubjectIDNumber: "175101002",
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
            queryInterface.bulkDelete("StudySiteSubject", null, {}),
        ]);
    },
};
