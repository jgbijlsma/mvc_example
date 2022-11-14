const { MongoClient } = require("mongodb"); // mongoClient is de software waarmee we kunnen verbinden met mongodb en verzoeken (queries) kunnen maken

const client = new MongoClient("mongodb://localhost:27017"); // maak een nieuwe mongoclient aan met het adres van het lokale mongoDB proces

let dbConnection; // variabele waarin de verbinding met de database opgeslagen gaat worden wanneer connectToDb() wordt aangeroepen

// functie die we kunnen aanroepen om verbinding met de database te maken. Dit wordt in index.js gedaan wanneer we ook de server starten
function connectToDb(callback) {
  // maak de verbinding met het mongoDB proces, daarna =>
  client.connect().then((connection) => {
    dbConnection = connection.db("mvcExample"); // sla de verbinding met de specifieke database "mvcExample" op
    callback(); // wanneer de verbinding is gemaakt kunnen we de callback functie uitvoeren die we als argument meegeven bij het uitvoeren van connectToDb in index.js
  });
}

// deze functie geeft simpelweg de verbinding met de database uit dit bestand aan andere bestanden wanneer ze een verzoek (query) willen maken
function getDb() {
  return dbConnection;
}

// zorg dat andere bestanden de functies kunnen importeren met require()
module.exports = {
  getDb,
  connectToDb,
};
