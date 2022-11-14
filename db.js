const { MongoClient } = require("mongodb");

const client = new MongoClient("mongodb://localhost:27017");

let dbConnection;

function connectToDb(callback) {
  client.connect().then((connection) => {
    dbConnection = connection.db("mvcExample");
    callback();
  });
}

function getDb() {
  return dbConnection;
}

module.exports = {
  getDb,
  connectToDb,
};
