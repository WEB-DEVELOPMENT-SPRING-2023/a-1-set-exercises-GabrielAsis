function play(clicked_id) {
  var audio = new Audio("../Audio Sampler/Audio/"+clicked_id + ".mp3");
  audio.play();
  audio.volume=0.2
}