document.addEventListener("DOMContentLoaded", function () {
  const memories = [
    {
      title: "The First Flower 🌹",
      text: "You tried to act normal… but your smile gave you away.",
    },
    {
      title: "Haldwani Surprise ❤️",
      text: "Your shocked face when I showed up — worth everything.",
    },
    {
      title: "Bhimtal Trip 🌊",
      text: "The lake was beautiful… but I only looked at you.",
    },
    {
      title: "Scooty Ride 🛵",
      text: "Wind in your hair. Laughing without reason.",
    },
    { title: "That One Hug 🤗", text: "Some hugs feel like home." },
    { title: "Us 🌹", text: "Not just this life. Every life." },
  ];

  const roseField = document.getElementById("rose-field");
  const modal = document.getElementById("memory-modal");
  const title = document.getElementById("memory-title");
  const text = document.getElementById("memory-text");
  const closeBtn = document.getElementById("close-btn");
  const finalMessage = document.getElementById("final-message");
  const progressCount = document.getElementById("progress-count");

  let clicked = 0;

  memories.forEach((memory, index) => {
    const rose = document.createElement("div");
    rose.classList.add("rose");
    rose.innerText = "🌹";

    rose.style.top = Math.random() * 70 + "%";
    rose.style.left = Math.random() * 85 + "%";

    rose.addEventListener("click", function () {
      title.innerText = memory.title;
      text.innerText = memory.text;
      modal.style.display = "flex";

      rose.style.visibility = "hidden";
      clicked++;
      progressCount.innerText = clicked;

      if (clicked === memories.length) {
        setTimeout(() => {
          finalMessage.style.display = "flex";
        }, 1000);
      }
    });

    roseField.appendChild(rose);
  });

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });
});
