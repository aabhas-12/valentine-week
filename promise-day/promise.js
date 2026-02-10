document.addEventListener("DOMContentLoaded", function () {
  const leaves = document.querySelectorAll(".hotspot");
  const treeWrapper = document.querySelector(".tree-wrapper");
  const promiseText = document.getElementById("promise-text");
  const finalMessage = document.getElementById("final-message");

  const promises = [
    "I promise to protect your heart as gently as I hold my own.",
    "I promise to stay patient when life feels heavy.",
    "I promise to celebrate your smallest wins.",
    "I promise to choose us — even on difficult days.",
    "I promise to listen when you speak… and when you don’t.",
    "I promise to grow with you, not away from you.",
    "I promise to never make you feel alone.",
    "I promise to respect your dreams as much as mine.",
    "I promise to stay soft with you.",
    "I promise to love you intentionally, every single day.",
  ];

  let clicked = new Set();

  function positionLeaves() {
    const rect = treeWrapper.getBoundingClientRect();

    const centerX = rect.width / 2;
    const centerY = rect.height / 2 - 40;
    const radius = 160;

    leaves.forEach((leaf, index) => {
      const angle = (index / leaves.length) * (2 * Math.PI);

      const x = centerX + radius * Math.cos(angle) - 27;
      const y = centerY + radius * Math.sin(angle) - 27;

      leaf.style.left = x + "px";
      leaf.style.top = y + "px";
    });
  }

  positionLeaves();
  window.addEventListener("resize", positionLeaves);

  leaves.forEach((leaf) => {
    leaf.addEventListener("click", function () {
      const index = parseInt(this.dataset.index);

      promiseText.innerHTML = promises[index];
      promiseText.classList.add("fade-in");

      clicked.add(index);

      this.style.background = "#caa24f";
      this.style.color = "white";

      if (clicked.size === promises.length) {
        finalMessage.classList.remove("hidden");
      }
    });
  });
});
