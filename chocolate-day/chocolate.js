document.addEventListener("DOMContentLoaded", function () {
  const tiers = document.querySelectorAll(".tier");
  const messageBox = document.getElementById("tier-message");
  const finalMessage = document.getElementById("final-message");
  const ending = document.getElementById("choco-ending");

  const messages = [
    "The first time you smiled at me… everything melted. 🍫",
    "Every small moment with you tastes sweeter than chocolate.",
    "Even silence with you feels rich and warm.",
    "Loving you is my favorite sweetness.",
  ];

  const tierPositions = [40, 120, 200, 300];

  let clicked = new Set();

  tiers.forEach((tier) => {
    tier.addEventListener("click", function () {
      const index = parseInt(tier.dataset.index);

      messageBox.classList.remove("hidden");
      messageBox.innerText = messages[index];
      messageBox.style.top = tierPositions[index] + "px";

      clicked.add(index);

      // When all 4 tiers clicked
      if (clicked.size === messages.length) {
        setTimeout(() => {
          finalMessage.classList.remove("hidden");
        }, 800);

        setTimeout(() => {
          ending.classList.remove("hidden");
        }, 1800);
      }
    });
  });
});
