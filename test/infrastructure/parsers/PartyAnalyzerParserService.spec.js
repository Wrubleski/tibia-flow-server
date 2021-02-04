const PartyAnalyzerParserService = require("../../../src/infrastructure/parsers/PartyAnalyzerParserService");
const parsedPtAnalyzerDummy = require("./dummies/parsedPtAnalyzerDummy");
const fs = require("fs");

const assert = require("assert").strict;
describe("PartyAnalyzerParserService", function () {
  describe("parse", function () {
    it("should return valid parsedPtAnalyzer when the ptAnalyzer is in the correct format", function () {
      const ptAnalyzerDummy = fs.readFileSync(
        "test/infrastructure/parsers/dummies/ptAnalyzerDummy.txt",
        "utf8"
      );
      const partyAnalyzerParserService = new PartyAnalyzerParserService(
        ptAnalyzerDummy
      );

      assert.deepStrictEqual(
        parsedPtAnalyzerDummy.default,
        partyAnalyzerParserService.parse()
      );
    });
  });
});
