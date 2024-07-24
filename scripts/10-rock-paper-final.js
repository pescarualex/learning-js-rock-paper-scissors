let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};


updateScoreElement();


function playGame(playerMove){
  computerMove = pickComputerMove();

  let result = '';


  if (playerMove === 'scissors'){
  if(computerMove === 'rock') {
    result = 'You lose.';
    score.losses += 1;
  } else if (computerMove === 'paper') {
    result = 'You win.';
    score.wins += 1;
  } else if (computerMove === 'scissors'){
    result = 'Tie.';
    score.ties += 1;
  }

  } else if(playerMove === 'paper'){
  if(computerMove === 'rock') {
    result = 'You win.';
    score.wins += 1;
  } else if (computerMove === 'paper') {
    result = 'Tie.';
    score.ties += 1;
  } else if (computerMove === 'scissors'){
    result = 'You lose.';
    score.losses += 1;
  }

  } else if(playerMove === 'rock'){
  if(computerMove === 'rock') {
    result = 'Tie.';
    score.ties += 1;
  } else if (computerMove === 'paper') {
    result = 'You lose.';
    score.losses += 1;
  } else if (computerMove === 'scissors'){
    result = 'You win.';
    score.wins += 1;
  }
  }

  updateResult(result);

  localStorage.setItem('score', JSON.stringify(score));
  updateScoreElement();
  updateMoves(playerMove, computerMove);
}


function updateScoreElement(){
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function updateResult(result){
  document.querySelector('.js-result').innerHTML = result;
}

function updateMoves(myMove = 0, computerMove = 0){
  document.querySelector('.js-moves').innerHTML = `You <img src="../img/${myMove}-emoji.png" alt="image" class="move-icon"> --- <img src="../img/${computerMove}-emoji.png" alt="image" class="move-icon"> Computer`
}




function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = '';

  if(randomNumber >= 0 && randomNumber < 1/3) {
  computerMove = 'rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove ='paper';
  } else {
    computerMove = 'scissors';
  }

  return computerMove;
}