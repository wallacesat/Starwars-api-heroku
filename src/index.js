const express = require("express");
const bodyParser = require("body-parser");
const { inverse, green } = require("chalk");

const port = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require("./controllers/authController")(app);
require("./controllers/peopleController")(app);
require("./controllers/planetsController")(app);
require("./controllers/starshipsController")(app);
require("./controllers/vehiclesController")(app);

app.listen(port, () => {
  console.log(
    inverse("\n Backend:") + green(` Api listening on port ${port} ... \n`)
  );
});
