const extractors = require("./extractors");
class PlayersParserService {
  constructor(ptAnalyzer) {
    this.players = ptAnalyzer
      .replace(/\t/g, "")
      .replace(" (Leader)", "")
      .split("\n")
      .slice(6);
  }

  parse() {
    var playersArr = [];

    for (
      let playerIndex = 0;
      playerIndex < this.players.length && playerIndex % 6 === 0;
      playerIndex = playerIndex + 6
    ) {
      playersArr.push({
        name: this.players[0 + playerIndex],
        loot: extractors.numberExtractor(
          extractors.fieldExtractor(this.players[1 + playerIndex], 6)
        ),
        supplies: extractors.numberExtractor(
          extractors.fieldExtractor(this.players[2 + playerIndex], 10)
        ),
        balance: extractors.numberExtractor(
          extractors.fieldExtractor(this.players[3 + playerIndex], 9)
        ),
        damage: extractors.numberExtractor(
          extractors.fieldExtractor(this.players[4 + playerIndex], 8)
        ),
        healing: extractors.numberExtractor(
          extractors.fieldExtractor(this.players[5 + playerIndex], 9)
        ),
      });
    }

    return playersArr;
  }
}

module.exports = PlayersParserService;
