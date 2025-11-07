// صفحة الباسورد
function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  const error = document.getElementById("error");
  if (input.toLowerCase() === "love") {
    window.location.href = "love.html";
  } else {
    error.textContent = "الباسورد غلط يا جميلة 😅";
  }
}

// صفحة الأغنية
const music = document.getElementById("loveSong");
const musicToggle = document.getElementById("musicToggle");

if (music && musicToggle) {
  // Set initial button text to play since audio starts paused
  musicToggle.textContent = "▶️";

  musicToggle.addEventListener("click", () => {
    if (music.paused) {
      music.play().catch(error => {
        console.error("Error playing audio:", error);
      });
      musicToggle.textContent = "⏸️";
    } else {
      music.pause();
      musicToggle.textContent = "▶️";
    }
  });
}
