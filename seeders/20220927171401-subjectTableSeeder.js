"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return Promise.all([
            queryInterface.bulkInsert(
                "Subject",
                [
                    {
                        LName: "John",
                        FName: "Doe",
                        FullName: "John Doe",
                        DOB: "4/6/1970",
                        Country: "US",
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        LName: "William",
                        FName: "Shatner",
                        FullName: "William Shatner",
                        DOB: "9/1/1955",
                        Country: "US",
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        LName: "Derek",
                        FName: "Randall",
                        FullName: "Derek Randall",
                        DOB: "11/4/1961",
                        Country: "NL",
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        LName: "Neil",
                        FName: "Armstrong",
                        FullName: "Neil Armstrong",
                        DOB: "7/7/1970",
                        Country: "NL",
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                ],
                {}
            ),
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete("Subject", null, {});
    },
};
