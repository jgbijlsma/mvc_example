const Message = require("../models/messageModel");

async function index(req, res) {
  const messages = await Message.findAll();
  messages.reverse();
  res.render("index", { messages });
}

async function create(req, res) {
  const { username, text } = req.body;

  if (!username || !text)
    return res.render("clientError", { message: "Please enter all data." });

  await Message.create({
    username,
    text,
  });

  res.redirect("/");
}

async function getCount(req, res) {
  const count = await Message.count();
  res.send({ count });
}

module.exports = {
  index,
  create,
  getCount,
};
