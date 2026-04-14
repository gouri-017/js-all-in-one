console.log('welcome');
let gameOn = false
let chances = 10;
let startButton = document.querySelector('#heading-title')
let headingTitle = document.getElementById('heading-title')
let showUserGuess = document.getElementById('showUserGuess')
const btn = document.querySelector("#numberGuessingGameBtn")
const inputValueElement = document.querySelector("#userGuessNumber")
let displayMessagePosition = document.getElementById('showMessage')
let displayRemainingGuesses = document.getElementById('showRemainingGuesses')
let guessesByUser = [];
let actualNumber;

function startGame(){
  gameOn = true;
  chances = 10;
  guessesByUser =[]
  displayRemainingGuesses.innerText = `${chances}`
  displayMessagePosition.innerText = `  `
  showUserGuess.innerText = `  `
  inputValueElement.value ='';
  actualNumber = Math.floor((Math.random() * 100)+1);
  console.log(actualNumber);
  headingTitle.innerText = "Game ON!!"
}









function numberGuessingLogic(userGuess){
  let message = 'please enter a number between 1-100';
  userGuess = Number(userGuess)
  if (Number.isNaN(userGuess) || userGuess>100 || userGuess<1 || userGuess==='')
  {
    showUserGuess.innerText = `  `
    return message;}
    
  chances --;
   if(userGuess === actualNumber){
     console.log(`Wohoo! you guessed it right! in your ${10-chances +1} attempt`);
    message = `Wohoo! you guessed it right!`
    gameOn = false;
    headingTitle.innerText = message;
    return message;
   }

    else if(userGuess > actualNumber){
      message = "number too high"
      return message;
    // console.log(`too high ${--chances} turns left`);
    }
    else{
      message = 'number too low'
      return message;
    // console.log(`too low ${--chances} turns left`);
    }

  
}

startButton.addEventListener('click',()=>{
  
  startGame();

})

btn.addEventListener('click',()=>{
  if (!gameOn) return;

    userGuess = inputValueElement.value;
    console.log(userGuess);
    guessesByUser.push(userGuess);
    showUserGuess.textContent = guessesByUser
    let result  = numberGuessingLogic(userGuess)
    
    displayMessagePosition.innerText = result;
    displayRemainingGuesses.textContent = `${chances}`
    inputValueElement.value ='';
    if(chances===0){
    headingTitle.innerText = 'uh,oh! You lost. Wanna give up? or just Play again!';
  console.log('uh,oh! You lost. Wanna give up? or just Play again!');
  gameOn = false;
}

  })



