//bussiness logic

// // function numberhood(number){
// //   if (number.toString().indexOf('3') > -1) {
// //       return "Won't you be my neighbor?";
// //   } else if (number.toString().indexOf('2') > -1) {
// //       return"Boop!";
// //   } else if (number.toString().indexOf('1') > -1) {
// //       return "Beep!";
// //   } else {
// //       return (number).toString();
// //   }
// // }


function numberhood(number){
  let array=[];
  for (i=0; i<=number; i++) {
    array.push(i);
  }
  return array;
}
console.log(numberhood(10));

// // let userInputArray = [];

// // function outputString(number) {
// //   let numhoodArray = [];

// //   if (isNaN(number)) {
// //     alert("Please input a number!");
// //   } else {
// //   userInputArray.forEach(function(number){
// //     numhoodArray.push(numberhood(number));
// //   });
// //   console.log(numhoodArray);
// //   return numhoodArray.join(", ");
// //   } 
// // }

// // //user interface logic

// // $(document).ready(function(){
// //   $("form#userInput").submit(function(event){
// //     event.preventDefault();
// //     $(".output1").show();
// //     $("img").show();
// //     $(".output").show();

// //     let userInput = parseInt($("input#input").val());
// //     userInputArray.push(userInput);

// //     $(".output2").text(outputString);

// //     $("form#userInput")[0].reset();
// //   });
// // });