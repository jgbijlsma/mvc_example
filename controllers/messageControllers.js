const Message = require("../models/messageModel"); // haal het geexporteerde object met model functies uit messageModel.js op

// deze controller zorgt ervoor dat we alle messages via de messageModel findAll() functie als array krijgen. Daarna wordt deze array aan EJS gegeven om de index pagina (hoofdpagina) te renderen
async function index(req, res) {
  const messages = await Message.findAll();
  messages.reverse(); // de messages staan standaard met de oudste als eerste. Draai ze om zodat we de nieuwste bovenaan tonen in de HTML
  res.render("index", { messages });
}

// deze functie zorgt ervoor dat de data voor een nieuw message via de messageModel opgeslagen wordt
async function create(req, res) {
  const { username, text } = req.body; // haal de username en text los uit het req.body object. Req.body is gemaakt door de express.urlencoded() functie wanneer het verzoek uit de form komt

  // check of de gebruiker beide data heeft ingevuld
  if (!username || !text)
    return res.render("clientError", { message: "Please enter all data." }); // zo niet, render dan de clientError.ejs pagina en geeft het als message om te renderen: Please enter all data.

  // geef een nieuw object met username en text aan de message model om hem op te slaan
  await Message.create({
    username,
    text,
  });

  // laat de browser opnieuw de index pagina (homepagina) verzoeken zodat alle messages (inclusief de nieuwe) opnieuw gerenderd worden.
  res.redirect("/");
}

// deze functie haalt de hoeveeldheid messages als number op, en stuurt het als JSON naar de browser waar er verdere stappen met deze data gedaan kunnen worden
async function getCount(req, res) {
  const count = await Message.count();
  res.send({ count }); // res.send({}) met een object zal automatisch het object als JSON text in de response opsturen
}

// exporteer de controller functies zodat we ze in index.js aan de app router endpoints kunnen toekennen
module.exports = {
  index,
  create,
  getCount,
};
