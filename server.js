const express = require('express')
const db = require('./config/connection');
const routes = require('./routes')

const PORT = process.env.PORT || 3001
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(routes)

// This makes sure the DB connection is made before starting the server.
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Now listening at http://localhost:${PORT}`);
  });
});