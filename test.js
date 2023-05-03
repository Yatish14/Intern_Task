const input_Dict2 = {
  "2020-01-01": 6,
  "2020-01-04": 12,
  "2020-01-05": 14,
  "2020-01-06": 2,
  "2020-01-07": 4,
};

function sumValuesByDayOfWeek(dict) {
  // Create an array of weekdays in the same order as the getDay() method
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Create an empty result dictionary to store the summed values
  const resultDict = {};

  weekdays.forEach((val) => {
    resultDict[val] = 0;
  });
  // Loop through the input dictionary and sum up the values for each day of the week
  for (const dateStr in dict) {
    // Parse the date string into a Date object
    const date = new Date(dateStr);

    // Get the day of the week from the Date object and use it as the key in the result dictionary
    const dayOfWeek = weekdays[date.getDay()];

    // Add the value to the sum for the corresponding day of the week in the result dictionary
    if (resultDict[dayOfWeek]) {
      resultDict[dayOfWeek] += dict[dateStr];
    } else {
      resultDict[dayOfWeek] = dict[dateStr];
    }
  }
  // Replace missing days with the mean of the previous and next days' values
  for (let i = 0; i < weekdays.length; i++) {
    const day = weekdays[i];
    if (!resultDict[day]) {
      const prevDay = weekdays[(i - 1 + 7) % 7];
      const nextDay = weekdays[(i + 1) % 7];
      const meanValue = (resultDict[prevDay] + resultDict[nextDay]) / 2;
      resultDict[day] = meanValue;
    }
  }

  return resultDict;
}

const output_Dict = sumValuesByDayOfWeek(input_Dict2);

console.log(output_Dict);
