const HeaderParserService = require("./HeaderParserService");
const PlayersParserService = require("./PlayersParserService");
class PartyAnalyzerParserService {
  constructor(incomingPtAnalyzer) {
    this.ptAnalyzer = incomingPtAnalyzer;
  }

  ptAnalyzerExport() {
    const headerParserService = new HeaderParserService(this.ptAnalyzer);
    const playersParserService = new PlayersParserService(this.ptAnalyzer);

    var analyzer = headerParserService.headerExtractor();
    analyzer.players = playersParserService.playersExtractor();

    return analyzer;
  }
}

module.exports = PartyAnalyzerParserService;
