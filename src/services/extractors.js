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

function fieldExtractor(fieldLine, substringIndex) {
  return fieldLine.substring(substringIndex);
}

function numberExtractor(str) {
  var number = str.replace(/,/g, "");
  return parseInt(number);
}

module.exports = {
  sessionDataExtractor,
  sessionTimeExtractor,
  fieldExtractor,
  numberExtractor,
};
