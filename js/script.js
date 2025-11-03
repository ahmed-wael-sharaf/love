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
  musicToggle.addEventListener("click", () => {
    if (music.paused) {
      music.play();
      musicToggle.textContent = "⏸️";
    } else {
      music.pause();
      musicToggle.textContent = "▶️";
    }
  });
}