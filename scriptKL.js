// 29 April 2020

// Guessing Game: Let the game generate a random number within a range of numbers (for example: between 0 and 10). Now you guess the number. You have 5 trials to guess the correct number. If the number you guessed is higher than the game-generated-number, then a message pops up saying it’s high else low or any message.
// Use your imagination to add features to this basic game. Can add GUI or can make it playing online by passing to the server.

// Declared and Initialized variables
// let userGuess =
let counter = 0
let maxGuesses = 5
let maxNumberRange = 10

// Create a function to generate a random number
function getRandomNumber(maxNumberRange) {
  randomNumber = Math.floor(Math.random() * Math.floor(maxNumberRange))
  return randomNumber
}
console.log(' randomNumber =', getRandomNumber(maxNumberRange))
console.log(counter)

function onClickCompareNumbers() {
  // Create a variable and assign it to the user input
  let userGuessInput = document.getElementById('input').value
  console.log('userGuessInput =', userGuessInput)
  console.log('userGuessInput =', typeof userGuessInput)
  let userNumber = Number(userGuessInput)
  console.log('randomNumber =', randomNumber)
  console.log('userNumber =', userNumber)
  counter++
  console.log(counter)
  if (counter < 6 && userNumber !== randomNumber) {
    console.log('counter count: ', counter)
    // console.log('Nooooo it is NOT a match')
    document.getElementById('guessOutcome').innerHTML =
      'Nooooo it is NOT a match'
    // alert('Nooooo it is NOT a match')
    // counter += 1
  }
  if (userNumber === randomNumber) {
    console.log('Match')
    // alert('Its a match. Game Over!')
    document.getElementById('guessOutcome').innerHTML =
      'Its a match. Game Over!'
    ;('Its a match. Game Over!')
  } else if (counter === 5) {
    console.log('No more guesses!')
    // alert('No more guesses!')
    document.getElementById('guessOutcome').innerHTML =
      'Game Over. No more guesses!'
  }
}
