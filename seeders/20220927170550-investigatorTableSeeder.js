"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return Promise.all([
            queryInterface.bulkInsert(
                "Investigator",
                [
                    {
                        FName: "Darren",
                        LName: "Payne",
                        Designation: "Dr.",
                        DisplayName: "Dr. Darren Payne",
                        ISPrimary: "Yes",
                        Profession: "Oncologist",
                        ClinicalSiteID: 1,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        FName: "Jacqueline",
                        LName: "Subka",
                        Designation: "Dr.",
                        DisplayName: "Dr. Jacqueline Subka",
                        ISPrimary: "No",
                        Profession: "Dermatalogist",
                        ClinicalSiteID: 1,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        FName: "Marianna",
                        LName: "Sabatino",
                        Designation: "Dr.",
                        DisplayName: "Dr. Marianna Sabatino",
                        ISPrimary: "Yes",
                        Profession: "Oncologist",
                        ClinicalSiteID: 2,
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
            queryInterface.bulkDelete("Investigator", null, {}),
        ]);
    },
};
