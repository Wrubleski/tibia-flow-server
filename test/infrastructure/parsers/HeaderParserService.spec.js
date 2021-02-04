const HeaderParserService = require("../../../src/infrastructure/parsers/HeaderParserService");
const parsedHeaderDummy = require("./dummies/ParsedHeaderDummy");
const fs = require("fs");

const assert = require("assert").strict;
describe("HeaderParserService", function () {
  describe("parse", function () {
    it("should return valid header when the analyzer is in the correct format", function () {
      const ptAnalyzerDummy = fs.readFileSync(
        "test/infrastructure/parsers/dummies/ptAnalyzerDummy.txt",
        "utf8"
      );
      const headerParserService = new HeaderParserService(ptAnalyzerDummy);

      assert.deepStrictEqual(
        parsedHeaderDummy.header,
        headerParserService.parse()
      );
    });
  });
});
