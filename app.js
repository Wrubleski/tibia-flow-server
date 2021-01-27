const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const _ = require("lodash");
const PartyAnalyzerParserService = require("./src/services/PartyAnalyzerParserService");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// function slugify(content) {
//   return content.toLowerCase().replace(/\s/g, "-").trim();
// }
app.post("/api/loot", (req, res) => {
  // console.log(req.body);

  const partyAnalyzerParserService = new PartyAnalyzerParserService(
    req.body.lootString
  );
  console.log(partyAnalyzerParserService.ptAnalyzerExport());

  res.send("Loot String: " + req.body.lootString);
});

app.listen(process.env.PORT || 3001, (req, res) => {
  console.log("Server is up and running.");
});
