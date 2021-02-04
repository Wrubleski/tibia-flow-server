const parsedHeaderDummy = require("./parsedHeaderDummy");
const parsedPlayersDummy = require("./parsedPlayersDummy");

let parsedPtAnalyzer = parsedHeaderDummy.header;
parsedPtAnalyzer.players = parsedPlayersDummy.players;

exports.default = parsedPtAnalyzer;
