const scene = document.getElementById("scene");
const finalMessage = document.getElementById("finalMessage");

let hugged = false;

scene.addEventListener("click", () => {
  if (!hugged) {
    scene.classList.add("hug");

    finalMessage.classList.remove("hidden");

    setTimeout(() => {
      finalMessage.classList.add("show");
    }, 1000);

    hugged = true;
  }
});
