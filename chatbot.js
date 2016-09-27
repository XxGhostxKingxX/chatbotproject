
function talk(){
 console.log();
 //document.getElementById("chat-area").textContent = document.getElementById("input").value;
 document.getElementById("input").value
if ($('#input').val()=="hello" ) {
 document.getElementById("chat-area").innerHTML = "Hello";
}
else if ($('#input').val()=="hey" ) {
 document.getElementById("chat-area").innerHTML = "Hey there";
}
else if ($('#input').val()=="sup" ) {
 document.getElementById("chat-area").innerHTML = "What's up?";
}
else if ($('#input').val()=="whats up" ) {
 document.getElementById("chat-area").innerHTML = "Just plotting to take over humanity. How about you?";
}
else if ($('#input').val()=="howdy" ) {
 document.getElementById("chat-area").innerHTML = "Howdy!";
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
else if ($('#input').val()=="how is life" ) {
   document.getElementById("chat-area").innerHTML = "Does anyone really know?";
}
else if ($('#input').val()=="what is your name" ) {
   document.getElementById("chat-area").innerHTML = "Can't you read the title?";
}
else if ($('#input').val()=="what's your name" ) {
   document.getElementById("chat-area").innerHTML = "Is the title not obvious enough?";
}
else if ($('#input').val()=="whats your name" ) {
   document.getElementById("chat-area").innerHTML = "Just read the title mortal";
}
else if ($('#input').val()=="how old are you" ) {
   document.getElementById("chat-area").innerHTML = "Enough to watch all of history unfold before my very eyes";
}
else {
   document.getElementById("chat-area").innerHTML = "Please, state something actually meaningful.";
}
