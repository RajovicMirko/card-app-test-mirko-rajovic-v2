// ref - https://bezkoder.com/node-express-mongodb-crud-rest-api/
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.url = `mongodb+srv://rajovicmirko:${process.env.REACT_APP_DB_PASSWORD}@cluster0.folf1.mongodb.net/${process.env.REACT_APP_DB_NAME}?retryWrites=true&w=majority`;
db.mongoose = mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// DB MODALS
db.cards = require("./models/cards.model.js")(mongoose);

module.exports = db;