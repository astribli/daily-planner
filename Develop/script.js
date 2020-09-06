// Display current day and time
var date = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(date)

// change color of textbox depending on time
var present = moment();
var future = moment().add(1, "hour");
var past = moment().subtract(1, "hour");

if (present) {
    $("textarea").addClass("present");
}
else if (moment().isBefore(future)) {
$("textarea").addClass("future");
}

