//login page 
document.getElementById("login-btn").addEventListener("click", () => {
  const name = document.getElementById("loginInput").value.trim();

  if (name !== "") {
    localStorage.setItem("playerName", name); // Save name
    window.location.href = "game.html"; // Go to game page
  } else {
    alert("Please enter your name.");
  }
});
