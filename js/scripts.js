//bussiness logic
// Test: "It will return "Won't you be my neighbor?" if the number includes '3' is inputed."
// Expect: numberhood(3).toEqual("Won't you be my neighbor?");

function numberhood(number){
  let numString = number.toString();
  if (numString.indexOf('3') > -1) {
    return "Won't you be my neighbor?";
  } else if (numString.indexOf('2') > -1) {
    return "Boop!";
  } else if (numString.indexOf('1') > -1) {
    return "Beep!";
  } else {
    return parseInt(numString);
  }
}//function ending

console.log(numberhood("hello"));
//user interface logic