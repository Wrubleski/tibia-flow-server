class HeaderParserService {
  constructor(ptAnalyzer) {
    this.ptAnalyzer = ptAnalyzer;
    this.header = ptAnalyzer.split("\n");
  }

  headerLineExtractor() {
    var numberOfLineBreaks = (this.ptAnalyzer.match(/\n/g) || []).length;
    console.log("Number of breaks: " + numberOfLineBreaks);
    return this.ptAnalyzer.toLowerCase().replace(/\t/g, "").split("\n");
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
