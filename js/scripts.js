//bussiness logic
// Test: "It will return "Beep!" if the number '1' is inputed."
// Expect: numberhood(1).toEqual("Beep!");

function numberhood(number){
  let numString = number.toString();
  //Test Two
  if (numString.indexOf('1') > -1) {
    return "Beep!";
  } else {
   return numString;
  }
}//function ending

console.log(numberhood(413));
//user interface logic