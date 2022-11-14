const express = require("express");
const { connectToDb } = require("./db");
const pageControllers = require("./controllers/pageControllers");
const messageControllers = require("./controllers/messageControllers");

const app = express();

app.set("view engine", "ejs");

app.listen(8080, () => console.log("Server started"));

app.use(express.static("./public"));
app.use(express.urlencoded({ extended: false }));

connectToDb(() => console.log("Connected to database"));

app.get("/", pageControllers.index);

app.post("/message", messageControllers.create);
app.get("/message/count", messageControllers.getCount);
