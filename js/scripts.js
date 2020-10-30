//bussiness logic

// function numberhood(number){
//   if (isNaN(number)) {
//     alert("Please input a number!");
//   } else if (number.toString().indexOf('3') > -1) {
//     numhoodArray.push("Won't you be my neighbor?");
//   } else if (number.toString().indexOf('2') > -1) {
//     numhoodArray.push("Boop!");
//   } else if (number.toString().indexOf('1') > -1) {
//     numhoodArray.push("Beep!");
//   } else {
//     numhoodArray.push((number).toString());
//   }
// }
function numberhood(number){
  if (isNaN(number)) {
    alert("Please input a number!");
  } else if (number.toString().indexOf('3') > -1) {
    return "Won't you be my neighbor?";
  } else if (number.toString().indexOf('2') > -1) {
    return"Boop!";
  } else if (number.toString().indexOf('1') > -1) {
    numhoodArray.push("Beep!");
  } else {
    return (number).toString();
  }
}

//function numString(number)
// let numhoodArray = [];

// userInputArray.forEach(function(input){
//   numhoodArray.push(input);
// });


//user interface logic

$(document).ready(function(){
  $("form#userInput").submit(function(event){
    event.preventDefault();
    $(".output1").show();
    $("img").show();

    let userInput = parseInt($("input#input").val());
    let userInputArray = [];
    userInputArray.push(userInput);

    function string(input) {
      let numhoodArray = [];
      userInputArray.forEach(function(input){
        numhoodArray.push(numberhood(input));
      });
      return numhoodArray.join(", ");
    }

    numberhood(userInput);

    $(".output2").text(string);
    console.log(string(input));

    $("form#userInput")[0].reset();
  });
});