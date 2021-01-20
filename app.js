const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post("/api/loot", (req, res) => {
  console.log(req.body);
  res.send("req.body.lootString: " + req.body.lootString);
});

app.listen(process.env.PORT || 3001, (req, res) => {
  console.log("Server is up and running.");
});
