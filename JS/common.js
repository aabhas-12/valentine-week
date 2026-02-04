// Countdown to Feb 14
alert("JS loaded");
function updateCountdown() {
  const targetDate = new Date("2026-02-14T00:00:00");
  const now = new Date();
  const diff = targetDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  const countdownElement = document.getElementById("countdown-number");

  if (countdownElement) {
    countdownElement.innerText = days;
  }
}
updateCountdown();
setInterval(updateCountdown, 1000);

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
