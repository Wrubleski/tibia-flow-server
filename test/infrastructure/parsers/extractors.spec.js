const extractors = require("../../../src/infrastructure/parsers/extractors");
const extractedSessionDataLineDummy = require("./dummies/extractedSessionDataLineDummy");
const assert = require("assert").strict;
describe("extractros", function () {
  describe("numberExtractor", function () {
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
  describe("sessionTimeExtractor", function () {
    it("should return '03:14' when the string is 'Session: 03:14h' ", function () {
      var str = "Session: 03:14h";
      var strsubstring = str.substring(9, 9 + 5);
      assert.strictEqual(
        strsubstring,
        extractors.sessionTimeExtractor("Session: 03:14h")
      );
    });
    it("should return '' when the string length is less than 9", function () {
      var str2 = "Sessio";
      var str2substring = str2.substring(9, 9 + 5);
      assert.strictEqual(
        str2substring,
        extractors.sessionTimeExtractor("Sessio")
      );
    });
  });
  describe("fieldExtractor", function () {
    it("should return '03:14h' when the fieldLine is 'Session: 03:14h' and substringIndex is 9 ", function () {
      assert.strictEqual(
        "03:14h",
        extractors.fieldExtractor("Session: 03:14h", 9)
      );
    });
    it("should return '' when the fieldLine length is less than substringIndex", function () {
      assert.strictEqual("", extractors.fieldExtractor("Sessio", 9));
    });
  });

  describe("sessionDataExtractor", function () {
    it("should return { start: 2021-02-22T17:01:29.000Z, end: 2021-02-22T20:51:20.000Z } when the sessionDataLine is 'Session data: From 2021-01-22, 14:01:29 to 2021-01-22, 17:51:20'", function () {
      const sessionDataLine =
        "Session data: From 2021-01-22, 14:01:29 to 2021-01-22, 17:51:20";

      assert.deepStrictEqual(
        extractedSessionDataLineDummy.dataStg,
        extractors.sessionDataExtractor(sessionDataLine)
      );
    });
  });
});
