"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return Promise.all([
            queryInterface.bulkInsert(
                "ClinicalSite",
                [
                    {
                        Name: "UCLA Health",
                        Address1: "123 Sunset Blvd",
                        City: "Los Angeles",
                        State: "CA",
                        Zip: "91001",
                        Country: "USA",
                        Phone: "310-111-1234",
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },

                    {
                        Name: "NKI",
                        Address1: "222 Science Park",
                        City: "Amsterdam",
                        State: "AM",
                        Country: "NL",
                        Phone: "30000 12345",
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
            queryInterface.bulkDelete("ClinicalSite", null, {}),
        ]);
    },
};
