const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const _ = require("lodash");
const HeaderParserService = require("./src/services/HeaderParserService");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// function slugify(content) {
//   return content.toLowerCase().replace(/\s/g, "-").trim();
// }
app.post("/api/loot", (req, res) => {
  // console.log(req.body);
  const headerParserService = new HeaderParserService(req.body.lootString);
  console.log(headerParserService.headerLineExtractor());

  res.send("Loot String: " + req.body.lootString);
});

app.listen(process.env.PORT || 3001, (req, res) => {
  console.log("Server is up and running.");
});
