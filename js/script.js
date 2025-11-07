// صفحة الباسورد
function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  const error = document.getElementById("error");
  if (input.toLowerCase() === "love") {
    // Play song immediately when navigating to love page
    const audio = new Audio("amr-diab-al-leila.mp3");
    audio.loop = true;
    audio.play().catch(error => {
      console.error("Error playing audio:", error);
    });
    window.location.href = "love.html";
  } else {
    error.textContent = "الباسورد غلط يا جميلة 😅";
  }
}

// صفحة الأغنية
const music = document.getElementById("loveSong");
const musicToggle = document.getElementById("musicToggle");

if (music && musicToggle) {
  // Set initial button text to pause since audio starts playing
  musicToggle.textContent = "⏸️";

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
