var dayandtime = $("#currentDay").text(moment().format('MMMM Do YYYY'));
var hour = moment().format('h');
console.log(hour);

if (hour ===){};



// var descriptionFromStorage = JSON.parse(localStorage.getItem("text"));
// if (!descriptionFromStorage){
//     descriptionFromStorage = [];
// }
// for (var i = 0; i < descriptionFromStorage.length; i++){
//     var paragraph = document.createElement("p");
//     paragraph.innerText = scoresFromStorage[i].name + "'s score is " + scoresFromStorage[i].score;
//     document.body.appendChild(paragraph);
// }
// var storeButton = document.getElementById("store");
// var DescInput =  $(".description");
// var scoreInput =  $(".btn");
// storeButton.addEventListener("click", function(){
//     var name = nameInput.value;
//     var score = scoreInput.value;
//     var newLocalStorageEntry = {
//         name: name,
//         score: score
//     };
//     descriptionFromStorage.push(newLocalStorageEntry);
//     localStorage.setItem("text", JSON.stringify(descriptionFromStorage));
// })