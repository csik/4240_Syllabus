// days contains how many days per month indexed by month - 1 and leap years being at 12
var days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31, 29];
var firstDay = new Date(2021, 8, 28)

// months
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function getTodaysDateID() {
  var d = new Date(),
    month = (d.getMonth() + 1),
    day = d.getDate(),
    year = d.getFullYear();


  if (d < firstDay) {
    d = firstDay
  }

  var dayString = "";

  if (day < 10) dayString = '0' + day; else dayString = '' + day

  var id = dayString + " " + months[month - 1] + " " + year;

  while (checkID(id)) {
    console.log(id)
    day = day - 1;
    if (day < 1) {
      month--;
      if (month == 2 && year % 4 == 0) {
        day = days[12]
      } else if (month == 0) {
        month = 12;
        day = days[month];
        year--;
      } else {
        day = days[month - 1];
      }
    }

    if (day < 10) dayString = '0' + day; else dayString = '' + day

    id = dayString + " " + months[month - 1] + " " + year;
  }

  console.log(id);
  // return id
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function checkID(id) {
  if (document.getElementById(id) != null) {
    return false;
  }
  return true;
}

console.log("Script attached")
document.getElementById("dateButton").addEventListener("click", getTodaysDateID);