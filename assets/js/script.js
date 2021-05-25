function init() {
  // time display on top...month day year="ll"
  $("#currentDay").text(moment().format("ll"));

  // colored time blocks
  colorTimeBlocks();
  setInterval(colorTimeBlocks, 60000)

  // data in local storage
  $(".time-block").each(function() {
    var timeBlock = $(this).attr("id");
    $("#" + timeBlock + " textarea").text(localStorage.getItem(moment().format("DDDYYYY") + timeBlock));
  });

  // save button handler
  $(".saveBtn").on("click", handleSave);
}

function colorTimeBlocks() {
  // for each time block
  $(".time-block").each(function() {
    var hour = parseInt($(this).attr("id").replace("hour-", ""));
    var currentHour = parseInt(moment().format("H"));
    // remove any class we may have added before
    $(this).removeClass("past present future");
    // past, present, future color blocks
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
  // textarea data saved in localstorage
  localStorage.setItem(moment().format("DDDYYYY") + hourId, $("#" + hourId + " textarea").val());
}

  
$(init);
