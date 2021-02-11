const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const loot = require("./src/api/routes/loot");
const error = require("./src/api/routes/404");
const errorController = require("./src/api/controllers/errorController");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/api/loot", loot);

app.use(error.error404);

app.use(errorController.error);

app.listen(process.env.PORT || 3001, (req, res) => {
  console.log("Server is up and running.");
});
