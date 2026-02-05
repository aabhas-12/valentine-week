document.addEventListener("DOMContentLoaded", function () {
  // =========================
  // MODAL + UNLOCK LOGIC
  // =========================

  const modal = document.getElementById("unlock-modal");
  const input = document.getElementById("unlock-input");
  const message = document.getElementById("unlock-message");
  const unlockBtn = document.getElementById("unlock-btn");
  const title = document.getElementById("unlock-title");
  const question = document.getElementById("unlock-question");

  document.querySelectorAll(".day-card").forEach(function (card) {
    card.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopImmediatePropagation();

      const unlockDate = new Date(card.dataset.date);
      const today = new Date(); // ✅ THIS WAS MISSING

      unlockDate.setHours(0, 0, 0, 0);
      today.setHours(0, 0, 0, 0);

      modal.style.display = "flex";
      title.innerText = card.innerText;

      if (today < unlockDate) {
        question.innerText =
          "Not yet 😌 This one unlocks on " + unlockDate.toDateString() + " ❤️";

        input.style.display = "none";
        unlockBtn.style.display = "none";
        message.innerText = "";

        return;
      }

      // Show custom question
      question.innerText = card.dataset.question || "Answer to unlock ❤️";

      input.style.display = "block";
      unlockBtn.style.display = "inline-block";
      input.value = "";
      message.innerText = "";

      unlockBtn.onclick = function () {
        const answer = input.value.toLowerCase().replace(/\s/g, "");
        const correctCode = (card.dataset.code || "").toLowerCase();

        if (answer === correctCode) {
          window.location.href = card.dataset.link;
        } else {
          message.innerText = "Hmm… think again ❤️";
        }
      };
    });
  });

  // =========================
  // COUNTDOWN
  // =========================

  function updateCountdown() {
    const targetDate = new Date("2026-02-14T00:00:00");
    const now = new Date();
    const diff = targetDate - now;

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

  // =========================
  // FLOATING PETALS
  // =========================

  for (let i = 0; i < 15; i++) {
    const petal = document.createElement("div");
    petal.classList.add("petal");
    petal.innerText = "🌸";
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = 5 + Math.random() * 5 + "s";
    petal.style.fontSize = 12 + Math.random() * 20 + "px";
    document.body.appendChild(petal);
  }

  // =========================
  // MUSIC TOGGLE
  // =========================

  const music = document.getElementById("bg-music");
  const toggle = document.getElementById("music-toggle");

  if (toggle && music) {
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
  }
});
