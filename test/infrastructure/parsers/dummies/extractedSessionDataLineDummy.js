const startYear = 2021;
const startMonth = 01;
const startDay = 22;
const startHour = 14;
const startMinute = 01;
const startSecond = 29;
const endYear = 2021;
const endMonth = 01;
const endDay = 22;
const endHour = 17;
const endMinute = 51;
const endSecond = 20;

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

exports.dataStg = { start: startDate, end: endDate };
