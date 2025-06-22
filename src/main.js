const app = document.getElementById("app");

const story = [
  {
    text: "You see Shiva across the room for the first time. What do you do?",
    choices: [
      { text: "Smile shyly 😊", next: 1 },
      { text: "Wave excitedly 👋", next: 2 },
    ],
  },
  {
    text: "Shiva smiles back. He walks toward you and asks if you'd like to grab coffee.",
    choices: [
      { text: "Yes! ☕", next: 3 },
      { text: "Maybe later...", next: 4 },
    ],
  },
  {
    text: "He waves back and gives you a wink 😉. Later, he texts you.",
    choices: [
      { text: "Reply instantly 💬", next: 3 },
      { text: "Ignore him 😌", next: 4 },
    ],
  },
  {
    text: "You both go to a cozy café. He asks, 'What do you love most in life?'",
    choices: [
      { text: "Peaceful walks 🌙", next: 5 },
      { text: "Romantic movies 🎥", next: 5 },
    ],
  },
  {
    text: "Shiva still smiles and says, 'I'll wait until you’re ready.'",
    choices: [
      { text: "Text him back later 💌", next: 3 },
      { text: "Ghost him 😶", next: 6 },
    ],
  },
  {
    text: "Later that night, you walk together under the stars.",
    choices: [
      { text: "Hold his hand ❤️", next: 'end' },
      { text: "Say something sweet 💖", next: 'end' },
    ],
  },
  {
    text: "You didn’t reply. Shiva still writes you a letter and leaves it at your door.",
    choices: [
      { text: "Open it with a smile 😊", next: 'end' },
      { text: "Tearfully read it 💌", next: 'end' },
    ],
  },
];

function renderScene(index) {
  if (index === "end") return showEnding();

  const scene = story[index];
  app.innerHTML = `
    <h2>${scene.text}</h2>
    ${scene.choices
      .map((choice) => {
        const nextVal =
          typeof choice.next === "number"
            ? choice.next
            : `'${choice.next}'`;
        return `<button onclick="renderScene(${nextVal})">${choice.text}</button>`;
      })
      .join("")}
  `;
}

function showEnding() {
  app.innerHTML = `
    <div style="text-align: center;">
      <h2 style="color: #d63384;">🎉 You’ve reached the heart of the story! 🎉</h2>
      <p style="font-size: 1.2rem;">Whatever you choose... I’m just glad it's always been you, <strong>Khushi</strong>. 💖</p>
      <p>— With all my love, Shiva 🧔</p>

      <div style="margin: 20px 0;">
        <span style="
          font-size: 2rem;
          padding: 10px 20px;
          border: 2px solid #ff69b4;
          border-radius: 12px;
          background-color: #fff0f5;
          color: #d63384;
          display: inline-block;
          animation: pulse 1.5s infinite;
        ">🏆 LOVE BADGE UNLOCKED</span>
      </div>

      <div style="font-size: 3rem; animation: heartbeat 1s infinite;">❤️</div>

      <button onclick="location.reload()" style="
        margin-top: 20px;
        padding: 10px 20px;
        font-size: 1rem;
        background-color: #ff69b4;
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
      ">
        🔁 Play Again
      </button>
    </div>

    <style>
      @keyframes heartbeat {
        0%, 100% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.3);
        }
      }

      @keyframes pulse {
        0% {
          box-shadow: 0 0 0 0 rgba(255, 105, 180, 0.7);
        }
        70% {
          box-shadow: 0 0 0 15px rgba(255, 105, 180, 0);
        }
        100% {
          box-shadow: 0 0 0 0 rgba(255, 105, 180, 0);
        }
      }
    </style>
  `;
}


window.renderScene = renderScene;
renderScene(0);
