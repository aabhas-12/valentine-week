document.addEventListener("DOMContentLoaded", function () {
  const tiers = document.querySelectorAll(".tier");
  const messageBox = document.getElementById("tier-message");
  const finalMessage = document.getElementById("final-message");

  const messages = [
    "The first time you smiled at me… everything melted. 🍫",
    "Every small moment with you tastes sweeter than chocolate.",
    "Even silence with you feels rich and warm.",
    "Loving you is my favorite sweetness.",
  ];

  const tierPositions = [
    40, // tier 1 top
    120, // tier 2
    200, // tier 3
    300, // tier 4
  ];

  let clicked = new Set();

  tiers.forEach((tier) => {
    tier.addEventListener("click", function () {
      const index = parseInt(tier.dataset.index);

      messageBox.innerText = messages[index];
      messageBox.style.top = tierPositions[index] + "px";

      clicked.add(index);

      if (clicked.size === messages.length) {
        finalMessage.classList.remove("hidden");
        setTimeout(() => {
          finalMessage.classList.add("show");
        }, 100);
      }
    });
  });
});
