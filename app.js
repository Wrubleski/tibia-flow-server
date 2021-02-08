const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const loot = require("./src/api/routes/loot");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/api/loot", loot);

app.listen(process.env.PORT || 3001, (req, res) => {
  console.log("Server is up and running.");
});
