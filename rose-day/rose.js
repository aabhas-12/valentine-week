document.addEventListener("DOMContentLoaded", function () {
  const memories = [
    {
      title: "The First Flower 🌹",
      text: "The day I gave you your first flower… and you pretended not to smile.",
    },
    {
      title: "Haldwani Surprise ❤️",
      text: "Your shocked face when I showed up… worth every kilometer.",
    },
    {
      title: "Bhimtal Trip 🌊",
      text: "The lake was beautiful. But you were the real view.",
    },
    {
      title: "Scooty Ride 🛵",
      text: "That wind. That laughter. That moment.",
    },
    {
      title: "That One Hug 🤗",
      text: "Some hugs stay in the heart forever.",
    },
    {
      title: "Us 🌹",
      text: "Not just today. Every life.",
    },
  ];

  const roseField = document.getElementById("rose-field");
  const modal = document.getElementById("memory-modal");
  const title = document.getElementById("memory-title");
  const text = document.getElementById("memory-text");
  const closeBtn = document.getElementById("close-btn");
  const finalMessage = document.getElementById("final-message");

  let clickedCount = 0;

  memories.forEach((memory, index) => {
    const rose = document.createElement("div");
    rose.classList.add("rose");
    rose.innerText = "🌹";

    rose.style.top = Math.random() * 80 + "%";
    rose.style.left = Math.random() * 90 + "%";

    rose.addEventListener("click", function () {
      title.innerText = memory.title;
      text.innerText = memory.text;

      modal.style.display = "flex";

      rose.style.visibility = "hidden";
      clickedCount++;

      if (clickedCount === memories.length) {
        setTimeout(() => {
          finalMessage.style.display = "block";
        }, 1000);
      }
    });

    roseField.appendChild(rose);
  });

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });
});
