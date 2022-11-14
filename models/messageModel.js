const { getDb } = require("../db");

async function create(data) {
  const db = getDb();
  await db.collection("messages").insertOne(data);
}

async function findAll() {
  const db = getDb();
  const messages = await db.collection("messages").find().toArray();
  return messages;
}

async function count() {
  const db = getDb();
  const count = await db.collection("messages").count();
  return count;
}

module.exports = {
  create,
  findAll,
  count,
};
