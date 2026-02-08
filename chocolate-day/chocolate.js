document.addEventListener("DOMContentLoaded", function () {
  const tiers = document.querySelectorAll(".tier");
  const messageBox = document.getElementById("tier-message");
  const finalSection = document.getElementById("final-section");

  let clickedCount = 0;

  tiers.forEach((tier) => {
    tier.addEventListener("click", function () {
      // Show message beside fountain
      const message = tier.getAttribute("data-message");
      messageBox.innerText = message;
      messageBox.classList.add("show");

      // Prevent double counting
      if (!tier.classList.contains("clicked")) {
        tier.classList.add("clicked");
        clickedCount++;
      }

      // If all 4 tiers clicked
      if (clickedCount === tiers.length) {
        setTimeout(() => {
          finalSection.classList.remove("hidden");
        }, 800);
      }
    });
  });
});
