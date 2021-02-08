"use strict";

const util = require("util");
require("assert");
const chai = require("chai");
const LootCalculatorService = require("../../application/services/LootCalculatorService");
const {
  analyserOne,
  analyserTwo,
} = require("../dummies/parserdAnalyserData/analysers");

const { expect } = chai;

describe("Loot Calculator Service test.", () => {
  before(() => {
    console.log("Starting tests on LootCalculatorService class.");
  });

  describe("testing getPaymentData method.", () => {
    it("Should return correct payment data.", () => {
      const lootCalculatorService = new LootCalculatorService(analyserOne);
      expect(lootCalculatorService.getPaymentData()).to.include.deep.members([
        { name: "Kirrila", payTo: [] },
        { name: "Fle Xaa", payTo: [] },
        { name: "Dona Constancia", payTo: [] },
        {
          name: "Tank Lord",
          payTo: [
            { player: "Kirrila", payment: 1098156.75 },
            { player: "Dona Constancia", payment: 902876.75 },
            { player: "Fle Xaa", payment: 889577.75 },
          ],
        },
      ]);
    });

    it("Should return correct payment data,", () => {
      const lootCalculatorService = new LootCalculatorService(analyserTwo);
      expect(lootCalculatorService.getPaymentData()).to.include.deep.members([
        {
          name: "James Zor",
          payTo: [
            { player: "Sezuheal", payment: 1433845.25 },
            { player: "Thor Forfun", payment: 461593.5 },
          ],
        },
        {
          name: "Esfirra de Figado",
          payTo: [{ player: "Thor Forfun", payment: 446611.75 }],
        },
        { name: "Thor Forfun", payTo: [] },
        { name: "Sezuheal", payTo: [] },
      ]);
    });
  });
});

const lootCalculatorService = new LootCalculatorService(analyserTwo);
console.log(
  util.inspect(lootCalculatorService.getPaymentData(), false, null, true)
);
