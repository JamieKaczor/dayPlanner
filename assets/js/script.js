function init() {
  // get current day and display on top of page
  $("#currentDay").text(moment().format("ll"));

  // color our time blocks and start interval to re-color every minute
  colorTimeBlocks();
  setInterval(colorTimeBlocks, 60000)

  // update time blocks with data in local storage
  $(".time-block").each(function() {
    var timeBlock = $(this).attr("id");
    // load saved data from local storage
    $("#" + timeBlock + " textarea").text(localStorage.getItem(moment().format("DDDYYYY") + timeBlock));
  });

  // attach our handler for the save buttons
  $(".saveBtn").on("click", handleSave);
}

function colorTimeBlocks() {
  // for each time block
  $(".time-block").each(function() {
    var hour = parseInt($(this).attr("id").replace("hour-", ""));
    var currentHour = parseInt(moment().format("H"));
    // remove any class we may have added before
    $(this).removeClass("past present future");
    // color block based on past, present, future class
    if (hour < currentHour) {
      $(this).addClass("past");
    } else if (hour > currentHour) {
      $(this).addClass("future");
    } else {
      $(this).addClass("present");
    }
  });
}

function handleSave(event) {
  // get the id of our parent
  var hourId = $(this).parent().attr("id");
  // save data in textarea in local storage
  localStorage.setItem(moment().format("DDDYYYY") + hourId, $("#" + hourId + " textarea").val());
}

  
$(init);
