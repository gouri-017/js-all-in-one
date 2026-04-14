console.log('welcome');



// Number guessing game works perfectly in console
function numberGuessingLogic(){
  let chances = 10;
  const guessesByUser = []
  
  let actualNumber = Math.floor((Math.random() * 100)+1);
  console.log(actualNumber);
  

while (chances>0) {
  let userGuess = Number(prompt('enter your guess'))
  guessesByUser.push(userGuess);
   if(userGuess === actualNumber){
     console.log(`Wohoo! you guessed it right! in your ${10-chances +1} attempt`);
     break;
   }
    else if(userGuess > actualNumber){
    console.log(`too high ${--chances} turns left`);
    }
    else{
    console.log(`too low ${--chances} turns left`);
    }
console.log(guessesByUser);

  
}


if(chances===0){
  console.log('uh,oh! You lost. Wanna give up? or just Play again!');
  
}

   
  
  
  
  



}