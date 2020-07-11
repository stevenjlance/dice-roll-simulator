DICE ROLL SIMULATOR
=================
Simulators are used to represent real-world phenoma and/or outcomes through the use of computer programming. Today we are going to create a simulator that attempts to simulate a roll of the dice.

![](https://media.giphy.com/media/VGoZVlR9naOZCiRLSy/giphy.gif)  

GOAL
------------
Today you are going to build a coin flip simulator that does two things. First, **you are going to build a simulator that tells you how long it will take to roll a certain amount of some number**. E.g. It took 202 rolls to get roll 24 sixes.
![Exemplar part 1](https://media.giphy.com/media/dVbsBzopvAG0SN3Sgn/giphy.gif)  

Second, **you are going to build a simulator that tells you how long it will take to get a certain number of dice rolls in a *row***. E.g. it took 32 rolls to get five 3 times in a row.
![Exemplar part 2](https://media.giphy.com/media/QvSer7kgQlx8kC46ia/giphy.gif)  

TASK
------------
**NOTE ON RANDOM NUMBERS**: You can use the `Math` library in JavaScript in order to generate random numbers. By using `Math.random()` you can generate a random number between 0 and 1. You can wrap this in `Math.floor()` and multiplication by some integer to get a random number between fixed values. Example below: 
```javascript
// Returns a random value between 0 and 1.
Math.random()

// Rounds any number down to the nearest whole number
Math.floor()

// Returns a random number between 0 and 9
Math.floor(Math.random() * 10)
```

For today's lab you will need to use `while` loops in addition to concepts you have previously learned (`Math.random()`, `querySelector()`, `addEventListener()`, etc.):

**PART 1: DICE ROLL SIMULATOR**  
1. Select for the HTML elements that you will need using `querySelector()`. You can ignore the second input range for now as we will use this in the second part of the lab.
2. The simplest way to simulate a diceRoll is to randomly generate a number of 0 or 5. 0 can be a dice roll of 1, 1 can be a dice roll of 2, etc. Print a random number of 0 or 5 to the console every time you refresh the page.
3. Construct a basic while loop that will count the number of rolls it takes to get to 10 instances of six. 
```javascript
var sixCount = 0
var rollCount = 0
var roll = Math.floor(Math.random()*6)

while(sixCount < 10){

/*
Inside the loop you should: 
(1) Roll the dice and update the value
(2) Check if it is a six and increase the sixCount count by 1 if it is a six.
(3) Increase the rollCount by 1 
*/


}
//This should print out 10 if while loop is correct
console.log(sixCount)

//This should print out the number of rolls it took to get 10 rolls of six.
console.log(rollCount)
```
4. Refactor the code so that it runs for ***any*** userInput when they click the first "Run Simulator" buttons
5. Update the `innerHTML` of the div with a class of rollOutput with the final results of the simulator.
6. **CHALLENGE**: Add a new input area and let the user decide which die value (1, 2, 3, 4, 5, or 6) they want to check for.

**PART 2: DICE STREAK SIMULATOR**  
The code you generated in part 1 can be quite informative to this portion! You are now going to get a user input and count for the number of times it takes to get a particular dice roll ***in a row***.
1. Select for the HTML elements that you will need using `querySelector()`. 
2. Construct a while loop that does two things. First, it should update the roll using `Math.random()` and `Math.floor()`. Next, it should determine if the roll is a certain number (let's say 6). The unique part here is that sixCount should return to 0 if the roll is **NOT** six. An example of some pseudocode can be seen below. Get this to print to the console. **NOTE: You should check to see how long it takes to get a small number of a certain value in a row to avoid crashing the program.**
```
// Ouside while loop
sixStreak <-- 0

// Inside while loop  
Update current roll

IF (current roll is a six)
  sixCount <-- sixCount + 1
  
ELSE
  sixCount <-- 0
  
  
DISPLAY (current flip)
DISPLAY (sixCount)
```
3. Refactor the code so that it runs for ***any*** userInput when they click the first "Run Simulator" buttons
4. Update the `innerHTML` of the div with a class of streakOutput with the final results of the simulator.
5. **CHALLENGE**: Add a new input area and let the user decide which die value (1, 2, 3, 4, 5, or 6) they want to check for.