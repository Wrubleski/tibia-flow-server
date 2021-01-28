const HeaderParserService = require("./HeaderParserService");
const PlayersParserService = require("./PlayersParserService");
class PartyAnalyzerParserService {
  constructor(incomingPtAnalyzer) {
    this.ptAnalyzer = incomingPtAnalyzer;
  }

  parse() {
    const headerParserService = new HeaderParserService(this.ptAnalyzer);
    const playersParserService = new PlayersParserService(this.ptAnalyzer);

    var analyzer = headerParserService.parse();
    analyzer.players = playersParserService.parse();

    return analyzer;
  }
}

module.exports = PartyAnalyzerParserService;
