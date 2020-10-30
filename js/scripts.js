//bussiness logic
// Test: "It will return "Boop!" if the number includes '2' is inputed."
// Expect: numberhood(2).toEqual("Boop!");

function numberhood(number){
  let numString = number.toString();
  if (numString.indexOf('2') > -1) {
    return "Boop!";
  } else if (numString.indexOf('1') > -1) {
    return "Beep!";
  } else {
    return parseInt(numString);
  }
}//function ending

console.log(numberhood(4));
//user interface logic