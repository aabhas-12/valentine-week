document.addEventListener("DOMContentLoaded", function () {
  const tiers = document.querySelectorAll(".tier");
  const messageBox = document.getElementById("tier-message");
  const messageText = document.getElementById("tier-text");
  const messageImage = document.getElementById("tier-image");
  const finalSection = document.getElementById("final-section");

  let clickedCount = 0;

  tiers.forEach((tier, index) => {
    tier.addEventListener("click", function () {
      const message = tier.getAttribute("data-message");

      // 🔥 IMPORTANT — match images with tiers
      const imagePath = `images/choco${index + 1}.jpg`;
      // change folder name if needed

      messageText.innerText = message;
      messageImage.src = imagePath;
      messageImage.classList.remove("hidden");

      messageBox.classList.add("show");

      if (!tier.classList.contains("clicked")) {
        tier.classList.add("clicked");
        clickedCount++;
      }

      if (clickedCount === tiers.length) {
        setTimeout(() => {
          finalSection.classList.remove("hidden");
        }, 800);
      }
    });
  });
});
