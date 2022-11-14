// importeer getDb() uit het db.js bestand waarmee we de verbinding met de database krijgen die eerder bij het uitvoeren van connectToDb() in index.js is gemaakt. Met de verbinding uit getDb() kunnen we verzoeken (queries) maken.
const { getDb } = require("../db");

// deze functie accepteerd een data object als parameter dat we in de messages collection opslaan
async function create(data) {
  const db = getDb();
  await db.collection("messages").insertOne(data);
}

// deze functie zoekt alle message objecten uit de messages collection, en returnt ze in een array
async function findAll() {
  const db = getDb();
  const messages = await db.collection("messages").find().toArray();
  return messages;
}

// deze functie zoekt de hoeveelheid messages als number en returnt dit getal
async function count() {
  const db = getDb();
  const count = await db.collection("messages").count();
  return count;
}

// exporteer de model functies zodat we ze in de messageController kunnen importeren met require()
module.exports = {
  create,
  findAll,
  count,
};
