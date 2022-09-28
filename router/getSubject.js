const Subject = require("../Models/Subject");
const StudySiteSubject = require("../Models/StudySiteSubject");
const getSubject = async (ctx) => {
    try {
        const result = await StudySiteSubject.findOne({
            where: { COI: ctx.params.coi },
            include: Subject,
        });

        ctx.body = JSON.stringify({
            status: 200,
            message: "patient details fetched successfully!",
            data: result,
        });
    } catch (error) {
        JSON.stringify({
            status: 400,
            message: error.message,
        });
    }
};

module.exports = getSubject;
