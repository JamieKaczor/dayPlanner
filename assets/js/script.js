$(document).ready(function(){
    // Displays the current date and time...month/day/year=ll
    $("#currentDay").text(moment().format("ll"));


    // Gets the local storage
    var hour9 = localStorage.getItem("9am");
    $("#nine").text(hour9);

    var hour10 = localStorage.getItem("10am");
    $("#ten").text(hour10);

    var hour11 = localStorage.getItem("11am");
    $("#eleven").text(hour11);

    var hour12 = localStorage.getItem("12pm");
    $("#twelve").text(hour12);

    var hour1 = localStorage.getItem("1pm");
    $("#one").text(hour1);

    var hour2 = localStorage.getItem("2pm");
    $("#two").text(hour2);

    var hour3 = localStorage.getItem("3pm");
    $("#three").text(hour3);

    var hour4 = localStorage.getItem("4pm");
    $("#four").text(hour4);
    
    var hour5 = localStorage.getItem("5pm");
    $("#five").text(hour5);


    $(".saveBtn").on("click", function() {
        var value = $(this).siblings(".userInput").val();
        var time = $(this).siblings(".hour").text();
        localStorage.setItem(time, value);
        $("this").siblings(".userInput").textContent(localStorage.value);

    });




});