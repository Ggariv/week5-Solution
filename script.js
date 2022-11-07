// textarea elements
var saveBttn = $(".saveBtn");
var containerEl = $(".container");
// schedule time variables
var schedule9am = $("#9AM");
var schedule10am = $("#10AM");
var schedule11am = $("#11AM");
var schedule12pm = $("#12PM");
var schedule1pm = $("#1PM");
var schedule2pm = $("#2PM");
var schedule3pm = $("#3PM");
var schedule4pm = $("#4PM");
var schedule5pm = $("#5PM");

// schedule array
var scheduleElArray = [ schedule9am, schedule10am, schedule11am, schedule12pm, schedule1pm, schedule2pm, schedule3pm, schedule4pm, schedule5pm, ]

// date & schedule section
var updateTime = function() {
    // current date section
    var today = moment();
    $("#currentDay").text(today.format("dddd, MMMM Do YYYY"));
    // schedule format section (past, present, future)
    var now = moment().format("kk");
    for (var i=0; i<scheduleElArray.length; i++) {
        scheduleElArray[i].removeClass("past present future");
        if (now > scheduleElArray[i].attr("data-hour")) {
            scheduleElArray[i].addClass("past");
            }
        else if (now === scheduleElArray[i].attr("data-hour")) {
            scheduleElArray[i].addClass("present");
            }
        else {
            scheduleElArray[i].addClass("future");
            }
        }
    }

// save in local storage
var taskRegistration = function() {
    for (var el of scheduleElArray) {
        el.val(localStorage.getItem("Hour" + el.attr("data-hour")));
        }
    }

// click handler function
var handleFormSubmit = function(event) {
    event.preventDefault();
    var clickedBtn = $(event.currentTarget);
    var targetText = clickedBtn.siblings("textarea");
    var targetTimeBlock = targetText.attr("data-hour");
    localStorage.setItem("Hour " + targetTimeBlock, targetText.val());
    }

updateTime();
taskRegistration();
saveBttn.on("click", handleFormSubmit);