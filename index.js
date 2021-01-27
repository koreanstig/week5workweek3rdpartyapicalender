// the var below allows for the current day to be displayed
var dayAndYear = $("#currentDay").text(moment().format('MMMM Do YYYY'));
var hour = moment().format('HH');
var num = $(".num");
// the below variable is to select the input and button
var eventInput = document.querySelector(".eventInput");
var enterButton = $(".enter-button");
var event9am = $(".event9am");
var event10am = $(".event10am");
var event11am = $(".event11am");
var event12pm = $(".event12pm");
var event1pm = $(".event1pm");
var event2pm = $(".event2pm");
var event3pm = $(".event3pm");
var event4pm = $(".event4pm");
var event5pm = $(".event5pm");

// creating an array to save multiple in localstorage
var keysArr = [];
var valuesArr = [];

// call function that will keep input on page upon refresh
renderInput();
colorChangeCurrent();
colorChangePast();

// function for keeping input into localstorage and keeping it there when refreshing page
function renderInput(){
    var keys = localStorage.getItem('keysArr');
    var values = localStorage.getItem("valuesArr");
    if (!values || !keys){
        return;
    } else { 
        for (i=0;i<keysArr.length;i++){
            var keysPosition = keysArr[i];
            if (keysPosition == "9am"){
                event9am.value = valuesArr[i];
                console.log(event9am);
            } else if (keysPosition == "10am"){
                event10am.value = valuesArr[i];
            } else if (keysPosition == "11am"){
                event11am.value = valuesArr[i];
            } else if (keysPosition == "12pm"){
                event12pm.value = valuesArr[i];
            } else if (keysPosition == "1pm"){
                event1pm.value = valuesArr[i];
            } else if (keysPosition == "2pm"){
                event2pm.value = valuesArr[i];
            } else if (keysPosition == "3pm"){
                event3pm.value = valuesArr[i];
            } else if (keysPosition == "4pm"){
                event4pm.value = valuesArr[i];
            } else if (keysPosition == "5pm"){
                event5pm.value = valuesArr[i];
            }
        };
    }
}
// new code for localStorage
enterButton.click(function(event){
    event.preventDefault();
    var button = $(this);
    var key = button.parent().parent().parent().attr("id");
    var value = button.parent().parent().parent().children('input').val();
    keysArr.push(key);
    valuesArr.push(value);
    localStorage.setItem("keysArr", JSON.stringify(keysArr));
    localStorage.setItem("valuesArr", JSON.stringify(valuesArr));
    renderInput();
})

// code for color change on inputs
function colorChangeCurrent(){
    if (hour == 9){
        event9am.css("background-color", "#FF0033");
    } else if (hour == 10){
        event10am.css("background-color", "#FF0033");
    } else if (hour == 11){
        event11am.css("background-color", "#FF0033");
    } else if (hour == 12){
        event12pm.css("background-color", "#FF0033");
    } else if (hour == 13){
        event1pm.css("background-color", "#FF0033");
    } else if (hour == 14){
        event2pm.css("background-color", "#FF0033");
    } else if (hour == 15){
        event3pm.css("background-color", "#FF0033");
    } else if (hour == 16){
        event4pm.css("background-color", "#FF0033");
    } else if (hour == 17){
        event5pm.css("background-color", "#FF0033");
    }
}
function colorChangePast(){
    if (hour > 9){
        event9am.css("background-color", "lightgrey");
    } else if (hour > 10){
        event10am.css("background-color", "lightgrey");
    } else if (hour > 11){
        event11am.css("background-color", "lightgrey");
    } else if (hour > 12){
        event12pm.css("background-color", "lightgrey");
    } else if (hour > 13){
        event1pm.css("background-color", "lightgrey");
    } else if (hour > 14){
        event2pm.css("background-color", "lightgrey");
    } else if (hour > 15){
        event3pm.css("background-color", "lightgrey");
    } else if (hour > 16){
        event4pm.css("background-color", "lightgrey");
    } else if (hour > 17){
        event5pm.css("background-color", "lightgrey");
    } 
}
