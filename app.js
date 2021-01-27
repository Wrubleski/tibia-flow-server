const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const _ = require("lodash");
const PartyAnalyzerParserService = require("./src/services/PartyAnalyzerParserService");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post("/api/loot", (req, res) => {
  const partyAnalyzerParserService = new PartyAnalyzerParserService(
    req.body.submitedPtAnalyzer
  );
  console.log(partyAnalyzerParserService.ptAnalyzerExport());

  res.send("submitedPtAnalyzer: " + req.body.submitedPtAnalyzer);
});

app.listen(process.env.PORT || 3001, (req, res) => {
  console.log("Server is up and running.");
});
