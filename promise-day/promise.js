document.addEventListener("DOMContentLoaded", function () {
  const leaves = document.querySelectorAll(".hotspot");
  const promiseText = document.getElementById("promise-text");
  const finalMessage = document.getElementById("final-message");

  const promises = [
    "I promise to protect your heart as gently as I hold my own.",
    "I promise to listen — even when your silence speaks.",
    "I promise to stay calm when storms try to shake us.",
    "I promise to choose you — especially on hard days.",
    "I promise to grow beside you, not ahead of you.",
    "I promise to make your safe place feel safer.",
    "I promise to fight for us, never against you.",
    "I promise to celebrate your smallest victories.",
    "I promise to wipe your tears before they fall.",
    "I promise that my love will stay intentional, not accidental.",
  ];

  let clickedCount = 0;

  leaves.forEach((leaf) => {
    leaf.addEventListener("click", function () {
      const index = parseInt(this.dataset.index);

      // Show promise
      promiseText.innerText = promises[index];

      // Prevent double count
      if (!this.classList.contains("clicked")) {
        this.classList.add("clicked");
        clickedCount++;
      }

      // When all 10 clicked
      if (clickedCount === 10) {
        setTimeout(() => {
          finalMessage.classList.remove("hidden");
          finalMessage.classList.add("fade-in");
        }, 600);
      }
    });
  });
});
