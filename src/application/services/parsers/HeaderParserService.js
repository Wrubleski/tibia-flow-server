const extractors = require("./extractors");
class HeaderParserService {
  constructor(ptAnalyzer) {
    this.header = ptAnalyzer.replace(/\t/g, "").split("\n").slice(0, 6);
  }

  parse() {
    const headerObj = {
      sessionData: extractors.sessionDataExtractor(this.header[0]),
      session: extractors.sessionTimeExtractor(this.header[1]),
      lootType: extractors.fieldExtractor(this.header[2], 11),
      loot: extractors.numberExtractor(
        extractors.fieldExtractor(this.header[3], 6)
      ),
      supplies: extractors.numberExtractor(
        extractors.fieldExtractor(this.header[4], 10)
      ),
      balance: extractors.numberExtractor(
        extractors.fieldExtractor(this.header[5], 9)
      ),
    };

    return headerObj;
  }
}

module.exports = HeaderParserService;
