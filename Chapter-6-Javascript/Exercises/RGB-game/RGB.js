var boxes=3;
var colors=[];
var selectedColor;
var lives;
var bgColor=document.querySelector("rgb-titles");
var colorBoxes=document.querySelector(".box");
var message=document.querySelector("#message");
var resetButton=document.querySelector('.reset');

startGame();

function startGame(){
    BoxColorMessage();
    reset();
    refillLives();
}

function refillLives(){
  document.getElementById("lifeCounter").innerHTML = 5 + 6;
}

function reset(){
  refillLives()

}

function BoxColorMessage(){
    for(var i = 0; i < boxes.length; i++){
        boxes[i].style.background = colors[i]
        boxes[i].addEventListener("click", function(){
          var clickedColor = this.style.background;
          if(clickedColor === selectedColor){
            message.textContent = "Correct!";
            changeColors(clickedColor);
            bgColor.style.background = clickedColor;
            } else {
            lives-1;
            message.textContent = "Incorrect | Try again... ";
        }

        if(lives=0){
          message.textContent="GAME OVER"
        }
      });
    }
  }






