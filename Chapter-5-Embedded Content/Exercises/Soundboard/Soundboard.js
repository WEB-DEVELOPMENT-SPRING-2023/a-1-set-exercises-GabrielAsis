var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");

var audio1 = new Audio('ah-ha.mp3');
var audio2 = new Audio('');
var audio3 = new Audio('');
button1.addEventListener("click", function() {
    audio1.play();
});

button2.addEventListener("click", function() {
  audio2.play();
});

button3.addEventListener("click", function() {
  audio3.play();
});
