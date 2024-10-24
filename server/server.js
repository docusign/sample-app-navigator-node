const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const config = require('./config/config');
const cors = require('cors');
const router = require('./router');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(session({
  secret: config.server.sessionSecret || 'default-secret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));
app.use('/', router);


app.use((req, res, next) => {
  res.status(404).send("Sorry, that route doesn't exist.");
});

const port = config.port || 8080;


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

