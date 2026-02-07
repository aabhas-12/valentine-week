document.addEventListener("DOMContentLoaded", function () {
  const ringBox = document.getElementById("ring-box");
  const mainText = document.getElementById("main-text");
  const gallery = document.getElementById("gallery");
  const proposal = document.getElementById("proposal");
  const finalMessage = document.getElementById("final-message");

  const photo = document.getElementById("photo");
  const caption = document.getElementById("caption");
  const nextBtn = document.getElementById("next-btn");

  const yesBtn = document.getElementById("yes-btn");
  const maybeBtn = document.getElementById("maybe-btn");

  // 🔥 IMPORTANT — adjust path if images inside propose-day folder
  const photos = [
    {
      src: "p1.jpeg",
      text: "The day I knew it is you only for me 😌",
    },
    {
      src: "p2.jpeg",
      text: "The day I didn’t want to leave.",
    },
    {
      src: "p3.jpeg",
      text: "The day I knew I don’t want anyone else.",
    },
  ];

  let currentIndex = 0;
  let ringOpened = false;

  // =========================
  // 💍 RING CLICK
  // =========================
  if (ringBox) {
    ringBox.addEventListener("click", function () {
      if (ringOpened) return; // prevent multiple triggers
      ringOpened = true;

      ringBox.innerText = "💍";
      mainText.innerText = "Okay… now look carefully 😌";

      setTimeout(function () {
        gallery.classList.remove("hidden");
        currentIndex = 0;
        showPhoto();
      }, 800);
    });
  }

  // =========================
  // 📸 SHOW PHOTO
  // =========================
  function showPhoto() {
    photo.src = photos[currentIndex].src;
    caption.innerText = photos[currentIndex].text;
  }

  // =========================
  // ➡ NEXT BUTTON
  // =========================
  if (nextBtn) {
    nextBtn.addEventListener("click", function () {
      currentIndex++;

      if (currentIndex < photos.length) {
        showPhoto();
      } else {
        gallery.classList.add("hidden");
        proposal.classList.remove("hidden");
      }
    });
  }

  // =========================
  // ❤️ YES BUTTON
  // =========================
  if (yesBtn) {
    yesBtn.addEventListener("click", function () {
      proposal.classList.add("hidden");
      finalMessage.classList.remove("hidden");
    });
  }

  // =========================
  // 😏 RUNNING MAYBE BUTTON
  // =========================
  if (maybeBtn) {
    maybeBtn.addEventListener("mouseover", function () {
      const x = Math.random() * 300 - 150;
      const y = Math.random() * 200 - 100;
      maybeBtn.style.transform = `translate(${x}px, ${y}px)`;
    });
  }

  // =========================
  // 💖 FLOATING HEARTS (CLEAN VERSION)
  // =========================
  function createHearts(count) {
    for (let i = 0; i < count; i++) {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.innerText = "💖";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = 5 + Math.random() * 5 + "s";
      heart.style.fontSize = 14 + Math.random() * 18 + "px";
      document.body.appendChild(heart);
    }
  }

  createHearts(25);
});
