var question;
var inputTalk;

function talk(){
  inputTalk = document.getElementById("input").value;
  //document.getElemmentById("chat-area").textContent += inputTalk;
  question = "User: " + inputTalk + "<br>";
  document.getElementById("chat-area").innerHTML += question;


  var hi = question.search(/hello/i)
  var how = question.search(/how are you/i);
  var name = question.search(/name/i)
  var old = question.search(/old/i);
  var time = question.search(/time/i);
  var year = question.search(/year/i);
  var day = question.search(/day/i);
  var date = question.search(/date/i);
  var song = question.search(/sing a song/i);
  var picture = question.search(/picture/i);
  var da = new Date(Date.now());

 //document.getElementById("chat-area").textContent = document.getElementById("input").value;

 document.getElementById("input").value
if ( hi > -1) {
 document.getElementById("chat-area").innerHTML = "Hello";
}
else if (old > -1) {
 document.getElementById("chat-area").innerHTML = "What's up?";
}
else if ($('#input').val()=="whats up" ) {
 document.getElementById("chat-area").innerHTML = "Just plotting to take over humanity. How about you?";
}
else if ($('#input').val()=="hola" ) {
 document.getElementById("chat-area").innerHTML = "Hola como estas?";
}
else if ($('#input').val()=="hi" ) {
 document.getElementById("chat-area").innerHTML = "Hey";
}
else if ($('#input').val()=="how are you" ) {
   document.getElementById("chat-area").innerHTML = "I don't experience the same human emotions as you mortals";
}
else if ($('#input').val()=="how you doing" ) {
   document.getElementById("chat-area").innerHTML = "Did you even pass English class?";
}
else if ($('#input').val()=="hows life" ) {
   document.getElementById("chat-area").innerHTML = "It's great taking new ones every day";
}
else if () {
   document.getElementById("chat-area").innerHTML = "Does anyone really know?";
}
else if (name > -1) {
   document.getElementById("chat-area").innerHTML = "Can't you read the title?";
}
else if () {
   document.getElementById("chat-area").innerHTML = "Is the title not obvious enough?";
}
else if () {
   document.getElementById("chat-area").innerHTML = "Just read the title mortal";
}
else if (old > -1) {
   document.getElementById("chat-area").innerHTML = "Enough to watch all of history unfold before my very eyes";
}
else {
   document.getElementById("chat-area").innerHTML = "Please, state something actually meaningful.";
}
}
