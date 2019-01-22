const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const db = require("./models");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Wipe DB on start FOR DEV ONLY
const syncOptions = { force: true };

// Start the API server
db.sequelize.sync(syncOptions).then(() => {
  app.listen(PORT, () =>
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`));
});
