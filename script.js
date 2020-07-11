var diceChoice = document.querySelector("#sel1");
var rollChoice = document.querySelector("#rollInput");
var submit = document.querySelector("#submit");
var diceRoll = 0;
var rollOutput = document.querySelector("#rollOutput");

submit.addEventListener("click", (e)=> {
  console.log('Clicked')
  var userInput = rollChoice.value;
  var mathToRandom = diceChoice.value - 1;
  console.log(mathToRandom)
  var sixCount = 0;
  var count = 0;
  while(sixCount<= userInput) {
    diceRoll = Math.floor(Math.random()*6)
    if(diceRoll == mathToRandom){
      count++;
      sixCount++
    } else {
      count++
    }
  }
  rollOutput.innerHTML = `<h1>To roll ${userInput} ${diceChoice.value}'s it took ${count} rolls</h1>`
})

var streakButton = document.querySelector("#streakSubmit");
var streak = document.querySelector("#streakInput");
var streakOutput = document.querySelector("#streakOutput");
streakButton.addEventListener("click", (e) => {
  console.log('Clicked!')
  var userInput = streak.value
  var mathToRandom = diceChoice.value - 1;
  var sixCount = 0;
  var count = 0;
  while(sixCount <= userInput){
    diceRoll = Math.floor(Math.random()*6)
    if(diceRoll == mathToRandom) {
      count++;
      sixCount++
    } else {
      count++
      sixCount = 0;
    }
  }
  streakOutput.innerHTML = `<h1>It toook ${count} rolls to roll ${userInput} ${diceChoice.value}'s in a row</h1>`;
})