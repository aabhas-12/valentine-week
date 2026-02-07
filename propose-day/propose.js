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

  // Ring box click
  ringBox.addEventListener("click", function () {
    ringBox.innerText = "💍";
    mainText.innerText = "Since you already survived Rose Day…";

    setTimeout(function () {
      gallery.classList.remove("hidden");
      showPhoto();
    }, 1000);
  });

  function showPhoto() {
    photo.src = photos[currentIndex].src;
    caption.innerText = photos[currentIndex].text;
  }

  nextBtn.addEventListener("click", function () {
    currentIndex++;

    if (currentIndex < photos.length) {
      showPhoto();
    } else {
      gallery.classList.add("hidden");
      proposal.classList.remove("hidden");
    }
  });

  yesBtn.addEventListener("click", function () {
    proposal.classList.add("hidden");
    finalMessage.classList.remove("hidden");
  });

  // Playful running button
  maybeBtn.addEventListener("mouseover", function () {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 200 - 100;
    maybeBtn.style.transform = `translate(${x}px, ${y}px)`;
  });

  // Floating hearts
  for (let i = 0; i < 15; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 5 + Math.random() * 5 + "s";
    heart.style.fontSize = 14 + Math.random() * 20 + "px";
    document.body.appendChild(heart);
  }
  // Floating hearts
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 6 + Math.random() * 6 + "s";
    heart.style.fontSize = 14 + Math.random() * 20 + "px";
    document.body.appendChild(heart);
  }
});
