// Display current day and time
var date = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(date)

var tasks = {};

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

// Save tasks in local storage
var saveTasks = function () {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

var loadTasks = function () {
    tasks = JSON.parse(localStorage.getItem("tasks"));
};

var auditTask = function () {
    var time = moment().format("hA");
    console.log(time);
};

// When save button is clicked
$(".saveBtn").on("click", function () {
    var text = $("textarea").text().trim();
    console.log(text);

    saveTasks();
});


setInterval(function () {
    auditTask();
}, (1000 * 60));