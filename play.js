const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || 'paper' || 'scissors')
    return userInput;
  else
    console.log('Please choose rock, paper, or scissors.');
};

const getComputerChoice = () => {
  computerChoice = Math.floor(Math.random()*3);
  switch (computerChoice){
    case 0 :
      return 'rock';
      break;

    case 1 :
      return 'paper';
      break;

    case 2 :
      return 'scissors'
      break;}
};

const determineWinner = (userChoice, computerChoice ) => {
      if (userChoice === computerChoice) {
        return 'The game is a tie!';
      }
      if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
          return 'The computer won!';
        } else {
          return 'You won!';
        }
      }
      if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
          return 'The computer won!';
        } else {
          return 'You won!';
        }
      }
      if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
          return 'The computer won!';
        } else {
          return 'You won!';
        }
      }
  };
  
