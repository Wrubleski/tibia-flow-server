const extractors = require("./extractors");
class PlayersParserService {
  constructor(ptAnalyzer) {
    this.players = ptAnalyzer
      .replace(/\t/g, "")
      .replace(" (Leader)", "")
      .split("\n")
      .slice(6);
  }

  playersExtractor() {
    var playersArr = [];

    for (
      let step = 0;
      step < this.players.length && step % 6 === 0;
      step = step + 6
    ) {
      playersArr.push({
        name: this.players[0 + step],
        Loot: extractors.numberExtractor(
          extractors.fieldExtractor(this.players[1 + step], 6)
        ),
        Supplies: extractors.numberExtractor(
          extractors.fieldExtractor(this.players[2 + step], 10)
        ),
        Balance: extractors.numberExtractor(
          extractors.fieldExtractor(this.players[3 + step], 9)
        ),
        Damage: extractors.numberExtractor(
          extractors.fieldExtractor(this.players[4 + step], 8)
        ),
        Healing: extractors.numberExtractor(
          extractors.fieldExtractor(this.players[5 + step], 9)
        ),
      });
    }

    return playersArr;
  }
}

module.exports = PlayersParserService;
