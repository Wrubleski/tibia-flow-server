const HeaderParserService = require("../../../src/application/services/parsers/HeaderParserService");
const parsedHeaderDummy = require("../dummies/parserServiceDummies/ParsedHeaderDummy");
const fs = require("fs");
const assert = require("assert").strict;

describe("HeaderParserService", function () {
  describe("parse", function () {
    it("should return valid header when the analyzer is in the correct format", function () {
      const ptAnalyzerDummy = fs.readFileSync(
        "test/services/dummies/parserServiceDummies/ptAnalyzerDummy.txt",
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
