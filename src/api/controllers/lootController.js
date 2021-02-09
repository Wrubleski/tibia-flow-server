const LootCalculatorService = require("../../application/services/LootCalculatorService");

const PartyAnalyzerParserService = require("../../infrastructure/parsers/PartyAnalyzerParserService");

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
    res.send({ paymentInfo: lootPaymentInfo, profit: playerProfit });
  } catch (err) {
    next(err);
  }
};
