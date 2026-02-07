document.addEventListener("DOMContentLoaded", function () {
  const tiers = document.querySelectorAll(".tier");
  const storyBox = document.getElementById("story-box");
  const storyTitle = document.getElementById("story-title");
  const storyText = document.getElementById("story-text");
  const finalMessage = document.getElementById("final-message");

  const stories = [
    {
      title: "The First Sweet Moment 🍫",
      text: "The first time we shared chocolate… I realised you were sweeter.",
    },
    {
      title: "That Chocolate Date ❤️",
      text: "I don’t remember the taste of chocolate. I remember your smile.",
    },
    {
      title: "You Melt Me 😌",
      text: "Chocolate melts in warmth. I melt when you look at me.",
    },
    {
      title: "Forever Sweet 🍫",
      text: "Even if everything melts… my love for you won’t.",
    },
  ];

  let unlocked = 0;

  tiers.forEach((tier) => {
    tier.addEventListener("click", function () {
      const id = tier.dataset.id;

      storyTitle.innerText = stories[id].title;
      storyText.innerText = stories[id].text;

      storyBox.classList.remove("hidden");

      tier.style.opacity = "0.5";
      tier.style.pointerEvents = "none";

      unlocked++;

      if (unlocked === stories.length) {
        setTimeout(() => {
          finalMessage.classList.remove("hidden");
        }, 1200);
      }
    });
  });
});
