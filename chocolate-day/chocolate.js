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

  let clickedCount = 0;
  let clickedTiers = new Set();

  tiers.forEach((tier) => {
    tier.addEventListener("click", function () {
      const index = tier.dataset.index;

      if (!clickedTiers.has(index)) {
        clickedTiers.add(index);
        clickedCount++;
      }

      messageBox.innerText = messages[index];

      if (clickedCount === messages.length) {
        finalMessage.classList.remove("hidden");

        setTimeout(() => {
          finalMessage.classList.add("show");
        }, 100);
      }
    });
  });
});
