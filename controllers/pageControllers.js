const Message = require("../models/messageModel");

async function index(req, res) {
  const messages = await Message.findAll();
  res.render("index", { messages });
}

module.exports = {
  index,
};
