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
  } return array;
}

$(document).ready(function(){
  $("form#userInput").submit(function(event){
    event.preventDefault();

    $("img").show();
    $(".output").show();

    let userInput = parseInt($("input#input").val());
    let transformedArray= roboTalk(userInput);

    $(".output2 p").text(transformedArray.join(", "));

    $("form#userInput")[0].reset();
  });
});