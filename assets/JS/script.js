//wait for the DOM to finish loading before running the game.
//get the button elements and add event listeners to them.

document.addEventListener("DOMContentLoaded", function () {
     let buttons = document.getElementsByTagName("button");
     for (let button of button) {
          button.addEventListener("click", function(){
              if (this.getAttribute("data-type") === "submit" ) {
                alert("You clicked Submit!");
              } else{
                  let gameType = this.getAttribute("data-type");
                alert('You clicked ${gameType}');  
              }  
          })
     }
})

function runGame() {

}

function checkAnswer() {

}

function calculateCorrctAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displayASubtractQuestion() {

}

function displayMultiplyQuestion() {

}