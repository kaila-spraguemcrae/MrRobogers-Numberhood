//bussiness logic

let numhoodArray = [];

function numberhood(number){
  if (isNaN(number)) {
    alert("Please input a number!");
  } else if (number.toString().indexOf('3') > -1) {
    numhoodArray.push("Won't you be my neighbor?");
  } else if (number.toString().indexOf('2') > -1) {
    numhoodArray.push("Boop!");
  } else if (number.toString().indexOf('1') > -1) {
    numhoodArray.push("Beep!");
  } else {
    numhoodArray.push((number).toString());
  }
}


//user interface logic

$(document).ready(function(){
  $("form#userInput").submit(function(event){
    event.preventDefault();
    
    let userInputArray= [];
    userInputArray.push(parseInt($("input#input").val()));

    numberhood(userInputArray);
    


    $(".output").text(numhoodArray.join(", "));
  
    $("form#userInput")[0].reset();
  });
});