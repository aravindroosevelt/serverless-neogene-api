const Sequelize = require("sequelize");

let db = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_URL,
        dialect: "postgresql",
        port: 5432,
    }
);

module.exports = {
    db,
};
