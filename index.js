// the var below allows for the current day to be displayed
var dayAndYear = $("#currentDay").text(moment().format('MMMM Do YYYY'));
// this var is for the color change
var hour = moment().format('HH');
// the below variable is to select the button
var enterButton = $(".enter-button");

// call function that will keep input via localstorage on page upon refresh
renderInput();

// function for pulling input from localstorage and inputing into value
function renderInput() {
    $("#9am").children("input").val(localStorage.getItem("9am"));
    $("#10am").children("input").val(localStorage.getItem("10am"));
    $("#11am").children("input").val(localStorage.getItem("11am"));
    $("#12pm").children("input").val(localStorage.getItem("12pm"));
    $("#1pm").children("input").val(localStorage.getItem("1pm"));
    $("#2pm").children("input").val(localStorage.getItem("2pm"));
    $("#3pm").children("input").val(localStorage.getItem("3pm"));
    $("#4pm").children("input").val(localStorage.getItem("4pm"));
    $("#5pm").children("input").val(localStorage.getItem("5pm"));
}
// new code for localStorage
enterButton.click(function(event){
    event.preventDefault();
    var button = $(this);
    var key = button.parent().parent().parent().attr("id");
    var value = button.parent().parent().parent().children('input').val();
    localStorage.setItem(key, value);
    renderInput();
})

// code for color change on inputs
function timeColorChange(){

}

timeColorChange();