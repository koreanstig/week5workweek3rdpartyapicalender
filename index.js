// the var below allows for the current day to be displayed
var dayAndYear = $("#currentDay").text(moment().format('MMMM Do YYYY'));
var hour = moment().format('HH');
var num = $(".num");
// the below variable is to select the input and button
var eventInput = document.querySelector(".eventInput");
var enterButton = $(".enter-button");

// call function that will keep input on page upon refresh
renderInput();

// function for keeping input into localstorage and keeping it there when refreshing page
function renderInput(){
    var value = localStorage.getItem("value");
    if (!value){
        return;
    } else {
        eventInput.value = value;
    }
}
// new code for localStorage
enterButton.click(function(event){
    event.preventDefault();
    var button = $(this);
    var key = button.parent().parent().parent().attr("id");
    console.log(key);
    var value = button.parent().parent().parent().children('input').val();
    console.log(value); 
    localStorage.setItem("key", key);
    localStorage.setItem("value", value);
    renderInput();
})

// code for color change on inputs
// for (i=0; i<num.length; i++){
//     if (hour == num[i]){
//         console.log(num[i]);
//         eventInput.css("background-color", "red");
//     } else if (hour > num[i]){
//         eventInput.css("background-color", "lightgray");
//     } else {
//         eventInput.css("background-color", "lightgreen");
//     }
// }
