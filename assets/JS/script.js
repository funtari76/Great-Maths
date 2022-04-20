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
                  runGame(gameType);  
              }  
          })
     }
     runGame("addition");
})

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */

function runGame(gameType) {

  // Creates two numbers betweenn 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
    
    if (gameType === "addition") {
      displayAdditionQuestion(num1, num2);
    } else {
      alert('Unknown game type: ${gameType}');
      throw 'Unknown game type: ${gameType}. Aborting!';
    }
}


function checkAnswer() {

}

function calculateCorrctAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('opernad1').textContent = operand1;
    document.getElementById('opernad2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}

function displayASubtractQuestion() {

}

function displayMultiplyQuestion() {

}