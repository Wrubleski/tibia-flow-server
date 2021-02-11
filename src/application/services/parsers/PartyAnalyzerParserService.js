const HeaderParserService = require("./HeaderParserService");
const PlayersParserService = require("./PlayersParserService");
class PartyAnalyzerParserService {
  constructor(incomingPtAnalyzer) {
    this.ptAnalyzer = incomingPtAnalyzer;
  }

  parse() {
    const headerParserService = new HeaderParserService(this.ptAnalyzer);
    const playersParserService = new PlayersParserService(this.ptAnalyzer);

    let parsedPtAnalyzer = headerParserService.parse();
    parsedPtAnalyzer.players = playersParserService.parse();

    return parsedPtAnalyzer;
  }
}

module.exports = PartyAnalyzerParserService;
