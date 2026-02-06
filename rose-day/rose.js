document.addEventListener("DOMContentLoaded", function () {
  const memories = [
    {
      title: "The First Flower 🌹",
      text: "That smile told me everything.",
      image: "images/rose1.jpeg",
    },
    {
      title: "Haldwani Surprise ❤️",
      text: "Your shocked face was priceless.",
      image: "images/rose2.jpeg",
    },
    {
      title: "Bhimtal Trip 🌊",
      text: "The lake was beautiful, but you were magic.",
      image: "images/rose3.jpeg",
    },
    {
      title: "Scooty Ride 🛵",
      text: "Wind in your hair. Pure happiness.",
      image: "images/rose4.jpeg",
    },
    {
      title: "That One Hug 🤗",
      text: "Some hugs feel like home.",
      image: "images/rose5.jpeg",
    },
    {
      title: "Us 🌹",
      text: "Not just this life. Every life.",
      image: "images/rose6.jpeg",
    },
  ];

  const roseField = document.getElementById("rose-field");
  const modal = document.getElementById("memory-modal");
  const title = document.getElementById("memory-title");
  const text = document.getElementById("memory-text");
  const imageElement = document.getElementById("memory-image");
  const closeBtn = document.getElementById("close-btn");
  const finalMessage = document.getElementById("final-message");
  const progressCount = document.getElementById("progress-count");
  const finalClose = document.getElementById("final-close");

  let clicked = 0;

  // =========================
  // CREATE ROSES
  // =========================
  memories.forEach(function (memory) {
    const rose = document.createElement("div");
    rose.classList.add("rose");
    rose.innerText = "🌹";

    rose.style.position = "absolute";
    rose.style.top = Math.random() * 70 + "%";
    rose.style.left = Math.random() * 85 + "%";
    rose.style.cursor = "pointer";

    rose.addEventListener("click", function () {
      // Set modal content
      title.innerText = memory.title;
      text.innerText = memory.text;

      if (imageElement) {
        imageElement.src = memory.image;
        imageElement.style.display = "block";
      }

      modal.style.display = "flex";

      // Hide clicked rose
      rose.style.visibility = "hidden";

      clicked++;
      if (progressCount) {
        progressCount.innerText = clicked;
      }

      // Show final message when all roses clicked
      if (clicked === memories.length) {
        setTimeout(function () {
          if (finalMessage) {
            finalMessage.style.display = "flex";
          }
        }, 800);
      }
    });

    roseField.appendChild(rose);
  });

  // =========================
  // CLOSE MEMORY MODAL
  // =========================
  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });
  }

  // Close modal when clicking outside content
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  // =========================
  // CLOSE FINAL MESSAGE
  // =========================
  if (finalClose) {
    finalClose.addEventListener("click", function () {
      finalMessage.style.display = "none";
    });
  }
});
