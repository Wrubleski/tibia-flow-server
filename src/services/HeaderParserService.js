const { constant, findLastIndex } = require("lodash");
const _ = require("lodash");
class HeaderParserService {
  constructor(ptAnalyzer) {
    this.ptAnalyzer = ptAnalyzer;
    this.header = ptAnalyzer.replace(/\t/g, "").split("\n").slice(0, 6);
  }

  headerLineExtractor() {
    const headerHandlerArr = [];
    const headerObj = {
      sessionData: {},
      session: "",
      lootType: "",
      loot: "",
      supplies: "",
      balance: "",
    };

    function sessionDataExtractor(sessionDataLine) {
      var startYear = sessionDataLine.substring(19, 19 + 4);
      var startMonth = sessionDataLine.substring(24, 24 + 2);
      var startDay = sessionDataLine.substring(27, 27 + 2);
      var startHour = sessionDataLine.substring(31, 31 + 2);
      var startMinute = sessionDataLine.substring(34, 34 + 2);
      var startSecond = sessionDataLine.substring(37, 37 + 2);
      var endYear = sessionDataLine.substring(43, 43 + 4);
      var endMonth = sessionDataLine.substring(48, 48 + 2);
      var endDay = sessionDataLine.substring(51, 51 + 2);
      var endHour = sessionDataLine.substring(55, 55 + 2);
      var endMinute = sessionDataLine.substring(58, 58 + 2);
      var endSecond = sessionDataLine.substring(61, 61 + 2);

      const startDate = new Date(
        startYear,
        startMonth,
        startDay,
        startHour,
        startMinute,
        startSecond
      );
      const endDate = new Date(
        endYear,
        endMonth,
        endDay,
        endHour,
        endMinute,
        endSecond
      );

      return { start: startDate, end: endDate };
    }

    function sessionTimeExtractor(sessionLine) {
      var sessionTime = sessionLine.substring(9, 9 + 5);
      return sessionTime;
    }

    function lootTypeExtractor(lootTypeLine) {
      var lootType = lootTypeLine.substring(11);
      return lootType;
    }

    function numberExtractor(str) {
      var number = str.replace(/,/g, "");
      return number;
    }

    function lootExtractor(lootLine) {
      var loot = lootLine.substring(6);
      return loot;
    }

    function balanceExtractor(balanceLine) {
      var balance = balanceLine.substring(9);
      return balance;
    }

    function suppliesExtractor(suppliesLine) {
      var supplies = suppliesLine.substring(10);
      return supplies;
    }

    this.header.forEach(function (line, index) {
      switch (index) {
        case 0:
          headerHandlerArr.push(line);
          headerObj.sessionData = sessionDataExtractor(line);
          break;

        case 1:
          headerHandlerArr.push(line);
          headerObj.session = sessionTimeExtractor(line);
          break;

        case 2:
          headerHandlerArr.push(line);
          headerObj.lootType = lootTypeExtractor(line);
          break;

        case 3:
          headerHandlerArr.push(line);
          headerObj.loot = numberExtractor(lootExtractor(line));
          break;

        case 4:
          headerHandlerArr.push(line);
          headerObj.supplies = numberExtractor(suppliesExtractor(line));
          break;

        case 5:
          headerHandlerArr.push(line);
          headerObj.balance = numberExtractor(balanceExtractor(line));
          break;

        default:
          console.log(`Sorry, we are out of ${index}.`);
      }
    });
    console.log(headerObj);
    return headerHandlerArr;
  }
}

module.exports = HeaderParserService;

// split /n

// function headerLineExtractor(line, valueType) {
// asfsafsafsdafsadfsafsadfasdfsa
// 	return (value)
// }

// var header = {
// 	sessionData: headerLineExtractor(line[0], "sessionTime"),
//   	session: headerLineExtractor(line[1], "String");,
//   	lootType: headerLineExtractor(line[2], "String"),
//   	Loot: headerLineExtractor(line[3], Number),
//   	supplies: headerLineExtractor(line[4], Number);
//   	Balance: headerLineExtractor(line[5], Number);
// 	}

// indexOf

// substring
