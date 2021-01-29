const extractors = require("../../../src/infrastructure/parsers/extractors");
const assert = require("assert").strict;
describe("extractros", function () {
  describe("numberExtractor", function () {
    it("should return 5 when the string is 5 ", function () {
      assert.strictEqual(5, extractors.numberExtractor("5"));
      assert.strictEqual(NaN, extractors.numberExtractor("String"));
    });
    it("should return NaN when the param is a String ", function () {
      assert.strictEqual(NaN, extractors.numberExtractor("String"));
    });
    it("should return 3572817 when the string is 3,572,817 ", function () {
      assert.strictEqual(3572817, extractors.numberExtractor("3,572,817"));
    });
    it("should return -475999 when the string is -475,999 ", function () {
      assert.strictEqual(-475999, extractors.numberExtractor("-475,999"));
    });
  });
});
