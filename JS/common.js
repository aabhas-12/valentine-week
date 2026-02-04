document.addEventListener("DOMContentLoaded", function () {
  // Countdown
  function updateCountdown() {
    const targetDate = new Date("2026-02-14T00:00:00");
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      document.getElementById("days").innerText = 0;
      document.getElementById("hours").innerText = 0;
      document.getElementById("minutes").innerText = 0;
      document.getElementById("seconds").innerText = 0;
      return;
    }
    if (diff <= 0) {
      document.querySelector(".countdown").innerHTML =
        "<h2 style='color:#c4004f;'>I'm coming to see you ❤️</h2>";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  // Floating petals
  for (let i = 0; i < 15; i++) {
    const petal = document.createElement("div");
    petal.classList.add("petal");
    petal.innerText = "🌸";
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = 5 + Math.random() * 5 + "s";
    petal.style.fontSize = 12 + Math.random() * 20 + "px";
    document.body.appendChild(petal);
  }

  const music = document.getElementById("bg-music");
  const toggle = document.getElementById("music-toggle");

  toggle.addEventListener("click", async function () {
    if (music.paused) {
      try {
        await music.play();
        toggle.innerText = "🔊";
      } catch (error) {
        console.log("Playback failed:", error);
      }
    } else {
      music.pause();
      toggle.innerText = "🎵";
    }
  });

  // Unlock logic
  document.querySelectorAll(".day-card").forEach((card) => {
    const unlockDate = new Date(card.dataset.date);
    const now = new Date();

    if (now >= unlockDate) {
      card.addEventListener("click", () => {
        window.location.href = card.dataset.link;
      });
    } else {
      card.classList.add("locked");
    }
  });
});
