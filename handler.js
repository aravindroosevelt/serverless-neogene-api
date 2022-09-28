const serverless = require("serverless-http");
const koa = require("koa");
require("dotenv").config();
const parser = require("koa-bodyparser");
const { db } = require("./db");
const { test } = require("./router/testRoute");
const getSubject = require("./router/getSubject");
const app = new koa();
const router = require("koa-router")();
const cors = require("@koa/cors");
require("./Models/index");

//middlewares
app.use(cors());
app.use(parser());

//routes
router.post("/test", test);
router.get("/getSubject/:coi", getSubject);

app.use(router.routes());

//listen
app.listen(process.env.PORT || 8000, () => console.log("App running!"));
db.authenticate().then(() => console.log("Connected!"));

module.exports.handler = serverless(app);
