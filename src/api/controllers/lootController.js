const LootCalculatorService = require("../../application/services/LootCalculatorService");

const PartyAnalyzerParserService = require("../../application/services/parsers/PartyAnalyzerParserService");

exports.loot_root_post = (req, res, next) => {
  try {
    const rawAnalyzerData = req.body.ptAnalyzer;
    const analyzerParserService = new PartyAnalyzerParserService(
      rawAnalyzerData
    );
    const parserdAlanyzerData = analyzerParserService.parse();
    const lootCalculatorService = new LootCalculatorService(
      parserdAlanyzerData
    );
    const lootPaymentInfo = lootCalculatorService.getPaymentData();
    const playerProfit = lootCalculatorService.getPlayerProfit();
    res.send({ paymentInfo: lootPaymentInfo, playerProfit: playerProfit });
  } catch (err) {
    next(err);
  }
};
