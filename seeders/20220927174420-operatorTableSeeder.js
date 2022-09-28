"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return Promise.all([
            queryInterface.bulkInsert(
                "Operator",
                [
                    {
                        LName: "Stinson",
                        FName: "Mitzi",
                        FullName: "Mitzi Stinson",
                        email: "Mitzi.Stinson@neogene.com",
                        Phone: "",
                        FuncGrpID: 5,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        LName: "Katigbak",
                        FName: "Jen",
                        FullName: "Jen Katigbak",
                        email: "Jen.Katigbak@neogene.com",
                        Phone: "",
                        FuncGrpID: 1,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        LName: "Montelongo",
                        FName: "Naomi",
                        FullName: "Naomi Montelongo",
                        email: "Naomi.montelongo@neogene.com",
                        Phone: "",
                        FuncGrpID: 2,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        LName: "Xavi",
                        FName: "Bellart",
                        FullName: "Xavi Bellart",
                        email: "Xavi.Bellart@neogene.com",
                        Phone: "",
                        FuncGrpID: 3,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        LName: "Alice",
                        FName: "Lin",
                        FullName: "Alice Lin",
                        email: "Alice.Lin@neogene.com",
                        Phone: "",
                        FuncGrpID: 4,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        LName: "Leela",
                        FName: "Rudrappa",
                        FullName: "Leela Rudrappa",
                        email: "Leela.Rudrappa@neogene.com",
                        Phone: "",
                        FuncGrpID: 6,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                ],
                {}
            ),
        ]);
    },

    async down(queryInterface, Sequelize) {
        return Promise.all([queryInterface.bulkDelete("Operator", null, {})]);
    },
};
