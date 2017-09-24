// Build an express server and serve an html file that displays the current year. Using the Web Console, console.log() the current day of the week as an intege
// of 0-6 where 0=Sunday, 1=Monday, 2=Tuesday, ... 6=Saturday.

function showYear() {
  var year = new Date().getFullYear();  
  var day = new Date().getDay();
  var dayLabels = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  console.log(dayLabels[day] + ", " + year);
  document.getElementById('today').innerHTML = dayLabels[day] + ", " + year;
}