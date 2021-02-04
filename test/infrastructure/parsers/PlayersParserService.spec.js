const PlayersParserService = require("../../../src/infrastructure/parsers/PlayersParserService");

const parsedPlayersDummy = require("./dummies/parsedPlayersDummy");
const fs = require("fs");

const assert = require("assert").strict;
describe("PlayersParserService", function () {
  describe("parse", function () {
    it("should return valid playersArr when the analyzer is in the correct format", function () {
      const ptAnalyzerDummy = fs.readFileSync(
        "test/infrastructure/parsers/dummies/ptAnalyzerDummy.txt",
        "utf8"
      );
      const playersParserService = new PlayersParserService(ptAnalyzerDummy);

      assert.deepStrictEqual(
        parsedPlayersDummy.players,
        playersParserService.parse()
      );
    });
  });
});
