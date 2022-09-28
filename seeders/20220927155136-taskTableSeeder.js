"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        return Promise.all([
            queryInterface.bulkInsert(
                "Tasks",
                [
                    {
                        ProcessID: 1,
                        FuncGrpID: 1,
                        ExecOrder: 1,
                        ProcOrder: 1,
                        TaskName: "P1",
                        TaskDesc:
                            "Prepares kits and sends to clinical sites - includes Leukapheresis Collection Label",
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },

                    {
                        ProcessID: 1,
                        FuncGrpID: 2,
                        ExecOrder: 2,
                        ProcOrder: 2,
                        TaskName: "P2",
                        TaskDesc:
                            "Assigns patient a Subject ID Number and schedules leukapheresis collection",
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        ProcessID: 1,
                        FuncGrpID: 3,
                        ExecOrder: 3,
                        ProcOrder: 3,
                        TaskName: "P3",
                        TaskDesc:
                            "Notifies team of patient Subject ID Number and leukapheresis collection date",
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        ProcessID: 1,
                        FuncGrpID: 5,
                        ExecOrder: 4,
                        ProcOrder: 4,
                        TaskName: "P4",
                        TaskDesc:
                            "Assigns COI and LOT Number to Subject ID Number",
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        ProcessID: 1,
                        FuncGrpID: 5,
                        ExecOrder: 5,
                        ProcOrder: 5,
                        TaskName: "P5",
                        TaskDesc:
                            "Notifies team of COI and LOT number assignment to Subject ID Number",
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        ProcessID: 1,
                        FuncGrpID: 1,
                        ExecOrder: 6,
                        ProcOrder: 6,
                        TaskName: "P6",
                        TaskDesc:
                            "Schedules pick-up of leukapheresis and includes COI and Subject ID number on AWB",
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        ProcessID: 2,
                        FuncGrpID: 4,
                        ExecOrder: 7,
                        ProcOrder: 1,
                        TaskName: "C1",
                        TaskDesc:
                            "Provides shipping container for leukapheresis to clinical site",
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        ProcessID: 2,
                        FuncGrpID: 2,
                        ExecOrder: 8,
                        ProcOrder: 2,
                        TaskName: "C2",
                        TaskDesc:
                            "Collects leukapheresis from patient and labels bag with leukapheresis collection label",
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        ProcessID: 2,
                        FuncGrpID: 2,
                        ExecOrder: 9,
                        ProcOrder: 3,
                        TaskName: "C3",
                        TaskDesc:
                            "Verifies Subject ID Number on AWB and packs leukapheresis into shipping container",
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        ProcessID: 2,
                        FuncGrpID: 4,
                        ExecOrder: 10,
                        ProcOrder: 4,
                        TaskName: "C4",
                        TaskDesc:
                            "Adds tamper seals to shipping container and delivers leukapheresis to NGF30",
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        ProcessID: 2,
                        FuncGrpID: 1,
                        ExecOrder: 11,
                        ProcOrder: 5,
                        TaskName: "C5",
                        TaskDesc:
                            "Receives leukapheresis shipment in vestibule and verifies Subject ID Number and COI Number on AWB",
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        ProcessID: 2,
                        FuncGrpID: 1,
                        ExecOrder: 12,
                        ProcOrder: 6,
                        TaskName: "C6",
                        TaskDesc: "Places luekapheresis shipment in APH Room",
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        ProcessID: 2,
                        FuncGrpID: 5,
                        ExecOrder: 13,
                        ProcOrder: 7,
                        TaskName: "C7",
                        TaskDesc:
                            "Accessions apheresis and applies COI Apheresis Label to Leukapheresis bag",
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        ProcessID: 3,
                        FuncGrpID: 5,
                        ExecOrder: 14,
                        ProcOrder: 1,
                        TaskName: "M1",
                        TaskDesc:
                            "Scans COI Apheresis Label against Batch Record",
                        PrintLabel: true,
                        PrintLabelID: 1,
                        ScanRequired: true,
                        ScanLabelID: 1,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        ProcessID: 3,
                        FuncGrpID: 5,
                        ExecOrder: 15,
                        ProcOrder: 2,
                        TaskName: "M2",
                        TaskDesc: "Transfers apheresis bag to GMP MFG suites",
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        ProcessID: 3,
                        FuncGrpID: 5,
                        ExecOrder: 16,
                        ProcOrder: 3,
                        TaskName: "M3",
                        TaskDesc:
                            "Day 0: Transfers Patient Material to new container (activation bag) and labels bag with COI MFG Label#1",
                        PrintLabel: true,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        ProcessID: 3,
                        FuncGrpID: 5,
                        ExecOrder: 17,
                        ProcOrder: 4,
                        TaskName: "M4",
                        TaskDesc:
                            "Scans COI MFG Label #1 on activation bag against Batch Record and incubates bag",

                        ScanRequired: true,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        ProcessID: 3,
                        FuncGrpID: 5,
                        ExecOrder: 18,
                        ProcOrder: 5,
                        TaskName: "M5",
                        TaskDesc:
                            "Day 4: Removes activation bag from incubator and scans COI MFG Label#1 against Batch Record",

                        ScanRequired: true,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        ProcessID: 3,
                        FuncGrpID: 5,
                        ExecOrder: 19,
                        ProcOrder: 6,
                        TaskName: "M6",
                        TaskDesc:
                            "Transfers patient material to a new container (G-Rex flask) and applies new COI MFG Label#2",
                        PrintLabel: true,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        ProcessID: 3,
                        FuncGrpID: 5,
                        ExecOrder: 20,
                        ProcOrder: 7,
                        TaskName: "M7",
                        TaskDesc:
                            "Scans COI MFG Label #2 on G-Rex flask against Batch Record and incubates flask",

                        ScanRequired: true,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        ProcessID: 3,
                        FuncGrpID: 5,
                        ExecOrder: 21,
                        ProcOrder: 8,
                        TaskName: "M8",
                        TaskDesc:
                            "Day 7: Removes G-Rex flask from incubator and scan COI MFG Label#2 against Batch Record",

                        ScanRequired: true,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        ProcessID: 3,
                        FuncGrpID: 5,
                        ExecOrder: 22,
                        ProcOrder: 9,
                        TaskName: "M9",
                        TaskDesc:
                            "If needed tranfers patient material into a new container (G-Rex flask) and applies new COI MFG Label#3",
                        PrintLabel: true,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        ProcessID: 3,
                        FuncGrpID: 5,
                        ExecOrder: 23,
                        ProcOrder: 10,
                        TaskName: "M10",
                        TaskDesc:
                            "Scans COI MFG Label#3 on G-Rex flask against Batch Record and incubates flask",

                        ScanRequired: true,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        ProcessID: 3,
                        FuncGrpID: 5,
                        ExecOrder: 24,
                        ProcOrder: 11,
                        TaskName: "M11",
                        TaskDesc:
                            "Day 14: Removes G-Rex flask from incubator and scans COI MFG Label#3 against Batch Record",

                        ScanRequired: true,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        ProcessID: 3,
                        FuncGrpID: 5,
                        ExecOrder: 25,
                        ProcOrder: 12,
                        TaskName: "M12",
                        TaskDesc:
                            "Day 14: Transfers patient material to a new container (harvest bag)",
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        ProcessID: 3,
                        FuncGrpID: 5,
                        ExecOrder: 26,
                        ProcOrder: 13,
                        TaskName: "M13",
                        TaskDesc:
                            "Day 14: Transfers patient material to new container(final product bag) and applies FP Label #1",
                        PrintLabel: true,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        ProcessID: 3,
                        FuncGrpID: 5,
                        ExecOrder: 27,
                        ProcOrder: 14,
                        TaskName: "M14",
                        TaskDesc:
                            "Day 14: Scans FP Label #1 on final product bag against Batch Record and places bag in cassette and applies FP Label #2",
                        PrintLabel: true,
                        ScanRequired: true,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        ProcessID: 3,
                        FuncGrpID: 5,
                        ExecOrder: 28,
                        ProcOrder: 15,
                        TaskName: "M15",
                        TaskDesc:
                            "Day 14: Scans FP Label #2 on cassette against Batch Record and places Final Product (bag and cassette) in the control rate freezer",
                        ScanRequired: true,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        ProcessID: 3,
                        FuncGrpID: 5,
                        ExecOrder: 29,
                        ProcOrder: 16,
                        TaskName: "M16",
                        TaskDesc:
                            "Day 14: Removes Final Product from control rate freezer and scans FP Label #2 against Batch Record",
                        ScanRequired: true,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        ProcessID: 3,
                        FuncGrpID: 5,
                        ExecOrder: 30,
                        ProcOrder: 17,
                        TaskName: "M17",
                        TaskDesc:
                            "Day 14: Stores Final Product in LN2 freezer and provides batch record documents and patient traceability report to Quality for batch release",
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        ProcessID: 3,
                        FuncGrpID: 6,
                        ExecOrder: 31,
                        ProcOrder: 18,
                        TaskName: "M18",
                        TaskDesc:
                            "Reviews batch record documents and patient traceability report",
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        ProcessID: 3,
                        FuncGrpID: 6,
                        ExecOrder: 32,
                        ProcOrder: 19,
                        TaskName: "M19",
                        TaskDesc: "Releases Final Product",
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        ProcessID: 3,
                        FuncGrpID: 1,
                        ExecOrder: 33,
                        ProcOrder: 20,
                        TaskName: "M20 ",
                        TaskDesc:
                            "Coordinates pick-up and delivery of Final Product and includes Subject ID Number and COI on AWB",
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        ProcessID: 4,
                        FuncGrpID: 4,
                        ExecOrder: 34,
                        ProcOrder: 1,
                        TaskName: "D1",
                        TaskDesc:
                            "Provides shipping container for Final Product to NGF30",
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        ProcessID: 4,
                        FuncGrpID: 1,
                        ExecOrder: 35,
                        ProcOrder: 2,
                        TaskName: "D2",
                        TaskDesc: "Verifies Subject ID Number and COI on AWB",
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        ProcessID: 4,
                        FuncGrpID: 1,
                        ExecOrder: 36,
                        ProcOrder: 3,
                        TaskName: "D3",
                        TaskDesc:
                            "Removes Final Product from LN2 freezer and scans FP Label#2 against Batch Record",
                        createdAt: new Date(),
                        updatedAt: new Date(),

                        ScanRequired: true,
                    },
                    {
                        ProcessID: 4,
                        FuncGrpID: 1,
                        ExecOrder: 37,
                        ProcOrder: 4,
                        TaskName: "D4",
                        TaskDesc: "Packs Final Product into shipping container",
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        ProcessID: 4,
                        FuncGrpID: 4,
                        ExecOrder: 38,
                        ProcOrder: 5,
                        TaskName: "D5",
                        TaskDesc:
                            "Adds tamper seals to shipping container and delivers Final Product to clinical siet",
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        ProcessID: 4,
                        FuncGrpID: 2,
                        ExecOrder: 39,
                        ProcOrder: 6,
                        TaskName: "D6",
                        TaskDesc:
                            "Verifies Subject ID Number on AWS and receives Final Product Shipping container",
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        ProcessID: 4,
                        FuncGrpID: 2,
                        ExecOrder: 40,
                        ProcOrder: 7,
                        TaskName: "D7",
                        TaskDesc:
                            "Unpacks Final Product, verifies Subject ID Number on FP Label #2 and stores in LNS2 freezer",
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        ProcessID: 5,
                        FuncGrpID: 2,
                        ExecOrder: 41,
                        ProcOrder: 1,
                        TaskName: "I1",
                        TaskDesc:
                            "Removes Final Product from LN2 storage, verifies Subject ID Number on FP Label #2",
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        ProcessID: 5,
                        FuncGrpID: 2,
                        ExecOrder: 42,
                        ProcOrder: 2,
                        TaskName: "I2",
                        TaskDesc:
                            "Removes Final Product bag from cassette, verifies Subject ID Number on FP Label #1 and thaws bag",
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    {
                        ProcessID: 5,
                        FuncGrpID: 2,
                        ExecOrder: 43,
                        ProcOrder: 3,
                        TaskName: "I3",
                        TaskDesc:
                            "Confirms Subject ID Number on FP Label #1 and infuses patient",
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                ],
                {}
            ),
        ]);
    },

    async down(queryInterface, Sequelize) {
        return Promise.all([queryInterface.bulkDelete("Tasks", null, {})]);
    },
};
