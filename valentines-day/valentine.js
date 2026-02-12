document.addEventListener("DOMContentLoaded", function () {
  const playBtn = document.getElementById("playBtn");
  const intro = document.getElementById("intro");
  const videoSection = document.getElementById("videoSection");
  const video = document.getElementById("valentineVideo");
  const finalMessage = document.getElementById("finalMessage");

  playBtn.addEventListener("click", function () {
    intro.style.opacity = "0";

    setTimeout(() => {
      intro.classList.add("hidden");
      videoSection.classList.remove("hidden");
      video.play();
    }, 1000);
  });

  video.addEventListener("ended", function () {
    finalMessage.classList.remove("hidden");
    setTimeout(() => {
      finalMessage.classList.add("show");
    }, 300);
  });
});
