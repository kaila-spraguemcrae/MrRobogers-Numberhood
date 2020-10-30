//bussiness logic
// Test: It will alert if the user does not input a number
// Expect: numberhood("hello").toEqual(alert("please input a number"))

function numberhood(number){
  if (isNaN(number)) {
    alert("Please input a number!");
  }
  else if (number.toString().indexOf('3') > -1) {
    return "Won't you be my neighbor?";
  } else if (number.toString().indexOf('2') > -1) {
    return "Boop!";
  } else if (number.toString().indexOf('1') > -1) {
    return "Beep!";
  } else {
    return parseInt(number);
  }
}//function ending

console.log(numberhood(43));

//user interface logic