// the var below allows for the current day to be displayed
var dayAndYear = $("#currentDay").text(moment().format('MMMM Do YYYY'));
var hour = moment().format('HH');
var num = $(".num");
var eventInput = $(".eventInput");
var enterButton = $(".enter-button");


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

// function renderLastRegistered() {
//     var input = localStorage.getItem("input");
//     if (!input) {
//       return;
//     }
//     eventInput.textContent = input;
//   }

// enterButton.click(function(event){
//     event.preventDefault();
//     var input = $("eventInput").value;
//     localStorage.setItem("input", input);
//     renderLastRegistered();
// });

// $('body').click(function(event){
//     if (event.target.parentElement.classList.contains("add-item")){
//         console.log("Click")
//         $('input').value = 'Hello';
//         console.log($('input'));
//     }
// });