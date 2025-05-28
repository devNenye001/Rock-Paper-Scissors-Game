




window.onload = () => {
  const myName = localStorage.getItem("playerName") || "Player";
   document.getElementById("messageWin").textContent = `Well played, ${myName}.`;

  // Audio playback only after user interaction
  const winMusic = new Audio("audios/win1 sound.mp3");
  winMusic.loop = true;
  winMusic.play();
};