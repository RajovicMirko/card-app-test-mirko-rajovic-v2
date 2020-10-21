// setup reference https://www.twilio.com/blog/react-app-with-node-js-server-proxy

const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions))

// DB
require("./DB");
require("./DB/routes/cards.routes")(app);

app.listen(process.env.REACT_APP_GL_SERVER_PORT, () =>
  console.log('Express server is running on localhost:' + process.env.REACT_APP_GL_SERVER_PORT)
);