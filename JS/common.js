document.addEventListener("DOMContentLoaded", function () {
  // Countdown
  const modal = document.getElementById("unlock-modal");
  const input = document.getElementById("unlock-input");
  const message = document.getElementById("unlock-message");
  const unlockBtn = document.getElementById("unlock-btn");
  const title = document.getElementById("unlock-title");
  const question = document.getElementById("unlock-question");

  document.querySelectorAll(".day-card").forEach((card) => {

  card.addEventListener("click", function (e) {

    e.preventDefault();
    e.stopImmediatePropagation();  // 🔥 important

    const unlockDate = new Date(card.dataset.date);
    const now = new Date();

    if (now < unlockDate) {
      return;
    }

    modal.style.display = "flex";
    title.innerText = card.innerText;
    question.innerText = "When did I give you the first flower? 🌹";

    unlockBtn.onclick = function (event) {
      event.stopPropagation();

      const answer = input.value.toLowerCase().replace(/\s/g, "");

      if (answer === card.dataset.code) {
        window.location.href = card.dataset.link;
      } else {
        message.innerText = "Hmm… think again ❤️";
      }
    };

  });

});


  function updateCountdown() {
    const targetDate = new Date("2026-02-14T00:00:00");
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
  document.querySelector(".countdown").innerHTML =
    "<h2 style='color:#c4004f;'>I'm coming to see you ❤️</h2>";
  return;
}

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
});
