export function formatDate(date) {
  const months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];

  const day = String(date.getDate()).padStart(2, "0");
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
}

export function subtractDaysFromDate(numberOfDays, fromDate) {
  const millisecondsInADay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day

  // If fromDate is not provided, use the current date
  if (!fromDate) {
    fromDate = new Date();
  }

  // Calculate the new date by subtracting the specified number of days
  const newDate = new Date(
    fromDate.getTime() - numberOfDays * millisecondsInADay
  );

  return newDate;
}

// Example usage:
// const numberOfDaysToSubtract = 10; // Change this number as needed
// const resultDate = subtractDaysFromDate(numberOfDaysToSubtract);
// console.log(resultDate.toDateString()); // Output the result date in a readable format

//   const currentDate = new Date();
//   const formattedDate = formatDate(currentDate);
//   console.log(formattedDate);
