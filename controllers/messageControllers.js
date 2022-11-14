const Message = require("../models/messageModel");

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
  create,
  getCount,
};
