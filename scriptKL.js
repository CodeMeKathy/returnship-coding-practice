// 29 April 2020
// Guessing Game: Let the game generate a random number within a range of numbers (for example: between 0 and 10). Now you guess the number. You have 5 trials to guess the correct number. If the number you guessed is higher than the game-generated-number, then a message pops up saying it’s high else low or any message.

// Use your imagination to add features to this basic game. Can add GUI or can make it playing online by passing to the server.

// Create a variable and assign it to the user input
let max = 10
// Create a function to generate a random number
function getRandomNumber(max) {
  randomNumber = Math.floor(Math.random() * Math.floor(max))
  return randomNumber
}
console.log('randomNumber', getRandomNumber(max))

let userGuessInput = prompt('Please guess a random number')
console.log('userGuessInput', userGuessInput)
let userNumber = parseFloat(userGuessInput)
console.log('userNumber', userNumber)

// Compare user input to random number and alert user
function compareUserGuess(userNumber, randomNumber) {
  console.log(userNumber)
  console.log(randomNumber)
  if (userNumber === randomNumber) {
    console.log('Match')
    alert('Its a match')
  } else {
    console.log('Nooooo it is NOT a match')
    alert('Nooooo it is NOT a match')
  }
}
compareUserGuess()
