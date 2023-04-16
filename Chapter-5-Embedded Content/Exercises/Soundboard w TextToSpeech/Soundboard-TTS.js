function play(clicked_id) {
    var audio = new Audio("../Audio Sampler/Audio/"+clicked_id + ".mp3");
    audio.play();
    audio.volume=0.2
}

const textInput=document.querySelector("#text-input");
const convertButton = document.querySelector("#convert");

function tts(text){
  let utternance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utternance);
}

convertButton.addEventListener("click", e =>{
  e.preventDefault(); 
  if(textInput.value!==""){
    tts(textInput.value);
  }
});
