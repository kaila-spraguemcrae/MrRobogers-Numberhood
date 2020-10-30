//bussiness logic

function numberhood(number){
  if (isNaN(number)) {
    alert("Please input a number!");
  } else if (number.toString().indexOf('3') > -1) {
      return "Won't you be my neighbor?";
  } else if (number.toString().indexOf('2') > -1) {
      return"Boop!";
  } else if (number.toString().indexOf('1') > -1) {
      return "Beep!";
  } else {
      return (number).toString();
  }
}

let userInputArray = [];

function outputString(number) {
  let numhoodArray = [];
  userInputArray.forEach(function(number){
    numhoodArray.push(numberhood(number));
  });
  return numhoodArray.join(", ");
}

//user interface logic

$(document).ready(function(){
  $("form#userInput").submit(function(event){
    event.preventDefault();
    $(".output1").show();
    $("img").show();

    let userInput = parseInt($("input#input").val());
    userInputArray.push(userInput);

    numberhood(userInput);

    $(".output2").text(outputString);

    $("form#userInput")[0].reset();
  });
});