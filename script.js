

//AUDIO FOR GAME
const clickSound = new Audio('audios/buzz sound.wav');
clickSound.load(); // Ensures it preloads

function addClickSound(buttonId, redirectUrl = null) {
  const btn = document.getElementById(buttonId);
  if (btn) {
    btn.addEventListener("click", function () {
      // Only play if audio is ready
      if (clickSound.readyState >= 2) {
        clickSound.currentTime = 0;
        clickSound.play().catch((err) => {
          console.log("Audio play blocked: ", err);
        });
      }

      if (redirectUrl) {
        setTimeout(() => {
          window.location.href = redirectUrl;
        }, 300);
      }
    });
  }
}
// For login page
addClickSound("login-btn", "/tip.html");

// For home/start page
addClickSound("home-btn", "/login.html");
addClickSound("tip-btn", "/game.html");
addClickSound("result-btn", "/index.html");
addClickSound("finger");

//game sound
const bgMusic = new Audio('audios/game-music.wav');
bgMusic.loop = true;
bgMusic.play();

//THE GAME LOGIC
// ===== Select elements =====
const handButtons = document.querySelectorAll('.hand');
const youScoreLabel = document.getElementById('myScore');
const cpuScoreLabel = document.getElementById('CPUscore');
const cpuHandImage = document.querySelector('#CPUhand img');

// ===== Choices & images =====
const choices = ['rock', 'paper', 'scissors'];
const cpuImages = {
  rock: '/images/CPU stone.jpg',
  paper: '/images/CPU paper.jpg',
  scissors: '/images/CPU scissiors.jpg'
};

// ===== Score tracking =====
let userScore = parseInt(localStorage.getItem('userScore')) || 0;
let cpuScore = parseInt(localStorage.getItem('cpuScore')) || 0;

// ===== Update UI on load =====
updateScoreDisplay();

// ===== Game Logic =====
handButtons.forEach(button => {
  button.addEventListener('click', () => {
    const userChoice = button.dataset.choice;
    const cpuChoice = getCPUChoice();

    cpuHandImage.src = cpuImages[cpuChoice];

    const result = checkWinner(userChoice, cpuChoice);
    updateScores(result);

    // Check for game end
    if (userScore === 3 || cpuScore === 3) {
      const finalResult = userScore === 3 ? 'win' : 'lose';
      localStorage.setItem('userScore', 0);
      localStorage.setItem('cpuScore', 0);
      window.location.href = `${finalResult}.html`;
    }
  });
});

// ===== Functions =====
function getCPUChoice() {
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function checkWinner(user, cpu) {
  if (user === cpu) return 'draw';
  if (
    (user === 'rock' && cpu === 'scissors') ||
    (user === 'paper' && cpu === 'rock') ||
    (user === 'scissors' && cpu === 'paper')
  ) {
    return 'user';
  }
  return 'cpu';
}

function updateScores(result) {
  if (result === 'user') {
    userScore++;
    localStorage.setItem('userScore', userScore);
  } else if (result === 'cpu') {
    cpuScore++;
    localStorage.setItem('cpuScore', cpuScore);
  }
  updateScoreDisplay();
}

function updateScoreDisplay() {
  youScoreLabel.textContent = `You: ${userScore}`;
  cpuScoreLabel.textContent = `Coco: ${cpuScore}`;
}
