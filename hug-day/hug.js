document.addEventListener("DOMContentLoaded", function () {
  const scene = document.getElementById("scene");
  const finalMessage = document.getElementById("finalMessage");
  const instruction = document.querySelector(".instruction");

  let hugged = false;

  scene.addEventListener("click", function () {
    if (hugged) return; // prevent multiple triggers

    hugged = true;

    // Add hug animation
    scene.classList.add("hug");

    // Fade instruction out
    instruction.style.opacity = "0";

    // Show final message after animation
    setTimeout(() => {
      finalMessage.classList.remove("hidden");
      finalMessage.classList.add("show");
    }, 1400);
  });
});
