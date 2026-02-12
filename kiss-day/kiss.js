document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("kissSlider");
  const left = document.querySelector(".blur-shape.left");
  const right = document.querySelector(".blur-shape.right");
  const heart = document.querySelector(".glow-heart");
  const kiss = document.querySelector(".kiss-mark");
  const finalMessage = document.getElementById("finalMessage");

  slider.addEventListener("input", function () {
    const value = slider.value;

    // Move shapes closer
    left.style.left = `${value / 2}px`;
    right.style.right = `${value / 2}px`;

    // Reduce blur
    left.style.filter = `blur(${25 - value / 5}px)`;
    right.style.filter = `blur(${25 - value / 5}px)`;

    // Glow
    heart.style.opacity = value / 100;
    heart.style.transform = `translate(-50%, -50%) scale(${0.4 + value / 150})`;

    // Kiss reveal at end
    if (value >= 100) {
      kiss.style.opacity = "1";
      kiss.style.transform = "translate(-50%, -50%) scale(1)";
      finalMessage.classList.add("show");
    }
  });
});
