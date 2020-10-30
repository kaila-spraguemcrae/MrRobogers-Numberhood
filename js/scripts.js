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
console.log(numberhood())
;console.log(numhoodArray);
//user interface logic

$(document).ready(function(){
  $("form#userInput").submit(function(event){
    event.preventDefault();
    //collect user input from #input  

  });
});