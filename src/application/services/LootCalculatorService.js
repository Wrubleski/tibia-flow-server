// TODO:
// Documentacao.
// melhorar como o playersBalance é exposto. Não é interessante ficar manipulando essa propriedade pelo codigo inteiro.

class LootCalculatorService {
  constructor(analyzerData) {
    this.analyzerData = analyzerData;
    this.totalLoot = this.analyzerData.loot;
    this.totalWast = this.analyzerData.supplies;

    this.playerProfit =
      (this.totalLoot - this.totalWast) / this.analyzerData.players.length;

    this.playersBalance = this.#getPlayersBalance();

    this.#processPaymentData();
  }

  #processPaymentData() {
    this.#calculatePaymentData();
    this.#parsePaymentData();
  }

  #getPlayersBalance() {
    return this.analyzerData.players
      .map((player) => {
        return {
          name: player.name,
          balance: player.supplies + this.playerProfit - player.loot,
          payTo: [],
        };
      })
      .sort((a, b) => {
        return a.balance - b.balance;
      });
  }

  #calculatePaymentData() {
    this.playersBalance.forEach((player, index, arr) => {
      let iteration = 0;

      while (player.balance !== 0) {
        let lastPlayer = arr[arr.length - 1 - iteration];
        if (Math.abs(player.balance) > lastPlayer.balance) {
          player.payTo.push({
            player: lastPlayer.name,
            payment: lastPlayer.balance,
          });

          player.balance = player.balance + lastPlayer.balance;
          lastPlayer.balance = 0;
          iteration = iteration + 1;
        } else {
          player.payTo.push({
            player: lastPlayer.name,
            payment: Math.abs(player.balance),
          });

          lastPlayer.balance = lastPlayer.balance - player.balance;
          player.balance = 0;
          iteration = iteration + 1;
        }
      }
    });
  }

  #parsePaymentData() {
    this.playersBalance.forEach((player) => {
      delete player.balance;
      player.payTo = player.payTo.filter((item) => {
        return item.payment !== 0 && item.player !== player.name;
      });
    });
  }

  getPlayerProfit() {
    return this.playerProfit;
  }

  getPaymentData() {
    return this.playersBalance;
  }
}

module.exports = LootCalculatorService;
