const test = (ctx) => {
    ctx.body = JSON.stringify({
        status: 200,
        message: "Welcome!",
    });
};

module.exports = {
    test,
};
