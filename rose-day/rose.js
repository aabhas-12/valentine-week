document.addEventListener("DOMContentLoaded", function () {
  const message = document.getElementById("message");
  const btn = document.getElementById("next-btn");
  const finalMessage = document.getElementById("final-message");

  let step = 0;

  const lines = [
    "It was the beginning of something beautiful.",
    "You smiled… and that smile stayed with me.",
    "That was the moment I knew — you were different.",
  ];

  btn.addEventListener("click", function () {
    if (step < lines.length) {
      message.innerText = lines[step];
      step++;
    } else {
      btn.style.display = "none";
      finalMessage.style.display = "block";
    }
  });

  // Floating petals
  for (let i = 0; i < 15; i++) {
    const petal = document.createElement("div");
    petal.classList.add("petal");
    petal.innerText = "🌸";
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = 5 + Math.random() * 5 + "s";
    document.body.appendChild(petal);
  }
});
