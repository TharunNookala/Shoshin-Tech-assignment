export function dateConverter(inputString) {
  var parts = inputString.split("T");
  var datePart = parts[0].split("-");
  var timePart = parts[1].split(":");

  var year = parseInt(datePart[0]);
  var month = parseInt(datePart[1]) - 1;
  var day = parseInt(datePart[2]);
  var hours = parseInt(timePart[0]);
  var minutes = parseInt(timePart[1]);

  var convertedDate = new Date(year, month, day, hours, minutes);
  var options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  // Format the date to a string
  var formattedDateString = new Intl.DateTimeFormat("en-US", options).format(
    convertedDate
  );
  return formattedDateString;
}
