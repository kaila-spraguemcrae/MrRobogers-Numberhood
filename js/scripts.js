// //bussiness logic

// Test: "It will replace numbers containing a '3' with 'Won't you be my neighbor?'."
// Expect: roboTalk(3).toEqual(["0","Beep!","Boop!","Won't you be my neighbor?"])

function roboTalk(number){
  let array=[];
  for (i=0; i<=number; i++) {
    array.push(i);
  }
  for (i= 0; i < array.length; i++) {
    if ((array[i] + "").includes("3")) {
      array[i] = "Won't you be my neighbor?"
    } else if ((array[i] + "").includes("2")) {
      array[i] = "Boop!"
    } else if ((array[i] + "").includes("1")) {
        array[i] = "Beep!";
    } 
  }
  return array;
  }
console.log(roboTalk(14));

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