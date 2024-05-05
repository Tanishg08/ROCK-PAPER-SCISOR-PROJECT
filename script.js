document.addEventListener('DOMContentLoaded', function() {
    var playNowBtn = document.getElementById('playNowBtn');
    var gameSection = document.getElementById('gameSection');
    var rockBtn = document.getElementById('rockBtn');
    var paperBtn = document.getElementById('paperBtn');
    var scissorsBtn = document.getElementById('scissorsBtn');
    var resultMessage = document.getElementById('resultMessage');
    var playerScoreEl = document.getElementById('playerScore');
    var computerScoreEl = document.getElementById('computerScore');
  
    var playerScore = 0;
    var computerScore = 0;
  
    playNowBtn.addEventListener('click', function() {
      gameSection.style.display = 'block';
    });
  
    rockBtn.addEventListener('click', function() {
      playGame('rock');
    });
  
    paperBtn.addEventListener('click', function() {
      playGame('paper');
    });
  
    scissorsBtn.addEventListener('click', function() {
      playGame('scissors');
    });
  
    function playGame(playerChoice) {
      var computerChoice = getComputerChoice();
      var result = getGameResult(playerChoice, computerChoice);
      updateScore(result);
      displayResult(playerChoice, computerChoice, result);
    }
  
    function getComputerChoice() {
      var choices = ['rock', 'paper', 'scissors'];
      return choices[Math.floor(Math.random() * 3)];
    }
  
    function getGameResult(playerChoice, computerChoice) {
      if (playerChoice === computerChoice) {
        return 'draw';
      } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
      ) {
        return 'win';
      } else {
        return 'lose';
      }
    }
  
    function updateScore(result) {
      if (result === 'win') {
        playerScore++;
      } else if (result === 'lose') {
        computerScore++;
      }
      playerScoreEl.textContent = 'Your Score: ' + playerScore;
      computerScoreEl.textContent = 'Computer Score: ' + computerScore;
    }
  
    function displayResult(playerChoice, computerChoice, result) {
      var messageText;
      if (result === 'draw') {
        messageText = 'It\'s a draw! You both chose ' + playerChoice + '.';
      } else if (result === 'win') {
        messageText = 'You win! You chose ' + playerChoice + ' and the computer chose ' + computerChoice + '.';
      } else {
        messageText = 'You lose. You chose ' + playerChoice + ' and the computer chose ' + computerChoice + '.';
      }
      resultMessage.textContent = messageText;
    }
  });
  