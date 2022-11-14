const express = require("express"); // het express framework
const { connectToDb } = require("./db"); // functie om te verbinden met mongodb
const messageControllers = require("./controllers/messageControllers"); // de messageControllers

const app = express(); // maak een nieuwe express app

app.set("view engine", "ejs"); // zorg dat EJS gebruikt wordt als we met express de res.render() functie uitvoeren

app.listen(8080, () => console.log("Server started")); // start de server op poort 8080
connectToDb(() => console.log("Connected to database")); // maak verbinding met de database via de connectToDb() functie die we uit het db.js hebben geimporteerd

app.use(express.static("./public")); // kijk voor elk binnenkomend verzoek of het een verzoek voor een van de bestanden in de public folder is
app.use(express.urlencoded({ extended: false })); // kijk voor elk verzoek of er form-urlencoded data (data uit een form) is meegestuurd, zo ja: zet het om (parse) naar een JS object en stop het in req.body die we in een controller kunnen gebruiken.

// Endpoint routing. Voer de juiste controller functies uit bij de gedefinieerde verzoeken (endpoints)
app.get("/", messageControllers.index);
app.post("/message", messageControllers.create);
app.get("/message/count", messageControllers.getCount);
