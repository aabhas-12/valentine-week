document.addEventListener("DOMContentLoaded", function () {
  const promises = [
    "I promise to choose you — not once, but every single day.",
    "I promise to be your calm when everything feels overwhelming.",
    "I promise to listen — even to the things you don’t say.",
    "I promise to grow with you, never away from you.",
    "I promise that my effort will never fade just because time passes.",
    "I promise to protect your heart as gently as I hold my own.",
    "I promise honesty — even when it is difficult.",
    "I promise to stand beside you — not ahead, not behind.",
    "I promise that loving you will never become routine. It will remain intentional.",
    "I promise that the version of me you fell in love with will never disappear. I will protect him. For you.",
  ];

  const leaves = document.querySelectorAll(".leaf");
  const promiseText = document.getElementById("promise-text");
  const finalMessage = document.getElementById("final-message");
  const tree = document.querySelector(".tree");

  let clickedCount = 0;

  leaves.forEach((leaf) => {
    leaf.addEventListener("click", function () {
      const index = leaf.getAttribute("data-index");

      promiseText.innerText = promises[index];
      promiseText.classList.add("show");

      if (!leaf.classList.contains("clicked")) {
        leaf.classList.add("clicked");
        clickedCount++;
      }

      if (clickedCount === 10) {
        tree.classList.add("glow");

        setTimeout(() => {
          finalMessage.classList.remove("hidden");
        }, 800);
      }
    });
  });
});
