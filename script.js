$(document).ready(function () {
  function hourUpdater() {
    //variable for the current time
    var currentTime = dayjs().hour();
    //adds classes based on if the time is in the past present and future
    $(".time-block").each(function () {
      var calenderTime = parseInt($(this).attr("id").split("-")[1]);

      if (calenderTime < currentTime) {
        $(this).addClass("past");
      } else if (calenderTime === currentTime) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }

  // saves the value of text written in the description to local storage and
  $(".saveBtn").on("click", function () {
    var desc = $(this).siblings(".description").val();
    var id = $(this).parent().attr("id");

    localStorage.setItem(id, desc);
  });

  function init() {
    hourUpdater();

    setInterval(hourUpdater, 15000);
    //adds the text saved from local storage and populates the text area
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
    //shows current day
    $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));
  }

  init();
});
