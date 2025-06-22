
import './style.css';

const questions = [
  {
    question: "What is my favorite color?",
    options: ["Blue", "Black", "Red", "Pink"],
    answer: "Black",
  },
  {
    question: "Where did we first meet?",
    options: ["College", "Park", "School", "Cafe"],
    answer: "School",
  },
  {
    question: "What is my pet name for you?",
    options: ["Babu", "Jaan", "Cutie", "Sweetie"],
    answer: "Babu",
  },
  {
    question: "Which month is our anniversary?",
    options: ["January", "February", "March", "June"],
    answer: "June",
  },
  {
    question: "What do I love the most about you?",
    options: ["Smile", "Eyes", "Voice", "BBS"],
    answer: "BBS",
  },
  {
    question: "What is my favorite food?",
    options: ["Burger", "Pasta", "Cheeze Burst Pizza", "Sushi"],
    answer: "Cheeze Burst Pizza",
  },
  {
    question: "What is my favorite movie?",
    options: ["Laal Rang", "Inception", "Dangal", "Tamasha"],
    answer: "Laal Rang",
  },
  {
    question: "What is my favorite sport?",
    options: ["Cricket", "Football", "Badminton", "Tennis"],
    answer: "Badminton",
  },
  {
    question: "Who is my favorite rapper?",
    options: ["Raftaar", "Krsna", "Badshah", "Emiway"],
    answer: "Krsna",
  },
  {
    question: "Who is my favorite actor?",
    options: ["Ranbir Kapoor", "Shahid Kapoor", "KK Menon", "Vicky Kaushal"],
    answer: "KK Menon",
  },
  {
    question: "What is my favorite pet?",
    options: ["Cat", "Dog", "Rabbit", "Parrot"],
    answer: "Dog",
  },
];


let current = 0;
let score = 0;

const app = document.getElementById('app');

function renderQuestion() {
  const q = questions[current];
  app.innerHTML = `
    <div class="quiz-card">
      <h1>${q.question}</h1>
      <div class="options">
        ${q.options.map(option => `
          <button onclick="handleAnswer('${option}')">${option}</button>
        `).join("")}
      </div>
    </div>
  `;
}

window.handleAnswer = function(option) {
  if (option === questions[current].answer) score++;
  current++;
  if (current < questions.length) {
    renderQuestion();
  } else {
    showResult();
  }
};

function showResult() {
  app.innerHTML = `
    <div class="result">
      <h2>You scored ${score}/${questions.length}</h2>
      <p>${score === questions.length ? "Baapre Khushi Saare Sahi Jawab 💖" : "Yaar Khushi Bas Ek glt bataya"}</p>
      <div class="hearts">❤️ 💕 💖 💘</div>
    </div>
  `;
}

renderQuestion();
