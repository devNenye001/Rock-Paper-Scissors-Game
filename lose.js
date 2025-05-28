

window.onload = () => {
  const myName = localStorage.getItem("playerName") || "Player";

  const messageEl = document.getElementById("messageLose");
  if (messageEl) {
    messageEl.innerHTML = `${myName.trim()}, you really thought you could beat me huh?`;
  }

 const loseSound = new Audio("audios/lose2 sound.wav");
loseSound.play();
};