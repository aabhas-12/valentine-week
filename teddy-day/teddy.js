document.addEventListener("DOMContentLoaded", function () {
  const mainTeddy = document.getElementById("main-teddy");
  const teddyOptions = document.getElementById("teddy-options");
  const messageBox = document.getElementById("teddy-message");
  const title = document.getElementById("teddy-title");
  const text = document.getElementById("teddy-text");
  const image = document.getElementById("teddy-image");
  const finalHug = document.getElementById("final-hug");

  const miniTeddies = document.querySelectorAll(".mini-teddy");

  let clickedCount = 0;

  const teddyData = {
    clingy: {
      title: "Clingy Teddy 🧸",
      text: "I just want to stay wrapped around you all day.",
      img: "teddy1.jpeg",
    },
    protective: {
      title: "Protective Teddy 🛡️",
      text: "No one hurts my girl. Ever.",
      img: "teddy2.jpeg",
    },
    silly: {
      title: "Silly Teddy 🤪",
      text: "I’ll always make you laugh when you forget how to smile.",
      img: "teddy3.jpeg",
    },
    sleepy: {
      title: "Sleepy Teddy 😴",
      text: "Come here… let me be your pillow tonight.",
      img: "teddy4.jpeg",
    },
  };

  mainTeddy.addEventListener("click", function () {
    teddyOptions.classList.remove("hidden");
  });

  miniTeddies.forEach((teddy) => {
    teddy.addEventListener("click", function () {
      const type = teddy.getAttribute("data-type");
      const data = teddyData[type];

      image.src = data.img;
      title.innerText = data.title;
      text.innerText = data.text;

      messageBox.classList.remove("hidden");

      teddy.style.visibility = "hidden";
      clickedCount++;

      if (clickedCount === 4) {
        setTimeout(() => {
          finalHug.classList.remove("hidden");
        }, 800);
      }
    });
  });
  for (let i = 0; i < 12; i++) {
    const teddy = document.createElement("div");
    teddy.innerText = "🧸";
    teddy.style.position = "fixed";
    teddy.style.left = Math.random() * 100 + "vw";
    teddy.style.top = Math.random() * 100 + "vh";
    teddy.style.fontSize = "18px";
    teddy.style.opacity = "0.3";
    teddy.style.animation = "float 6s ease-in-out infinite alternate";
    document.body.appendChild(teddy);
  }
});
