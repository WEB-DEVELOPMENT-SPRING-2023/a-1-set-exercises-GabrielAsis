var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var button5 = document.getElementById("button5");
var button6 = document.getElementById("button6");
var button7 = document.getElementById("button7");
var button8 = document.getElementById("button8");
var button9 = document.getElementById("button9");

var audio1 = new Audio('Audios/Alarm.mp3');
var audio2 = new Audio('Audios/Bonk.mp3');
var audio3 = new Audio('Audios/Boom.mp3');
var audio4 = new Audio('Audios/Goofy.mp3');
var audio5 = new Audio('Audios/Hehe Boy.mp3');
var audio6 = new Audio('Audios/Laugh.mp3');
var audio7 = new Audio('Audios/Metal pipe.mp3');
var audio8 = new Audio('Audios/OH MY GOD.mp3');
var audio9 = new Audio('Audios/Yeah Baby.mp3');

audio1.volume=.1;
audio2.volume=.5;
audio3.volume=.5;
audio4.volume=.5;
audio5.volume=1;
audio6.volume=1;
audio7.volume=0.1;
audio8.volume=0.3;
audio9.volume=0.3;

button1.addEventListener("click", function() {
    audio1.play();
});

button2.addEventListener("click", function() {
  audio2.play();
});

button3.addEventListener("click", function() {
  audio3.play();
});

button4.addEventListener("click", function() {
  audio4.play();
});

button5.addEventListener("click", function() {
audio5.play();
});

button6.addEventListener("click", function() {
audio6.play();
});

button7.addEventListener("click", function() {
  audio7.play();
});

button8.addEventListener("click", function() {
audio8.play();
});

button9.addEventListener("click", function() {
audio9.play();
});



