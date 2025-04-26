
function checkAnswer() {
  var ans = document.getElementById('answer').value;
  if (ans === "032825") {
    document.getElementById('qna-section').style.display = "none";
    document.getElementById('popup-images').classList.remove('hidden');
  } else {
    alert("Try again, love!");
  }
}

function moveNoButton() {
  var button = document.getElementById('no-button');
  var x = Math.floor(Math.random() * window.innerWidth * 0.8);
  var y = Math.floor(Math.random() * window.innerHeight * 0.8);
  button.style.position = 'absolute';
  button.style.left = x + 'px';
  button.style.top = y + 'px';
  alert(noQuestions[Math.floor(Math.random() * noQuestions.length)]);
}

function showSpecialQnA() {
  document.getElementById('popup-images').style.display = "none";
  document.getElementById('special-qna').classList.remove('hidden');
}

const noQuestions = [
  "Are you really sure?", "Think again!", "Please reconsider?", "Don't be so cold!", "You might regret it!",
  "No way you mean it!", "Come on, say Yes!", "You sure about that?", "Give it another thought!",
  "Wouldn't it be nice?", "You're joking right?", "You still love me right?", "I know you want to!",
  "Think about our memories!", "Don't you miss me?", "Smile first!", "Hug first then answer!",
  "Remember the first time?", "I love you so much!", "You are my everything!", "Awww c'mon!", "I'm waiting...",
  "I'll wait forever!", "Let's not be sad!", "Click Yes please!", "I'm begging you!", "You're my happiness!",
  "Think of me!", "I miss you!", "Our love is special!", "Forever you and me!", "Click yes darling!",
  "My heart beats for you!", "Let's plan our future!", "Say yes love!", "You can't say no!", 
  "This is fate!", "I'm your soulmate!", "We were meant to be!", "Believe in us!", "Our love story continues!",
  "Be mine forever!", "Without you I'm nothing!", "One yes changes everything!", "Forever and always!",
  "You're my dream come true!", "Love conquers all!", "Please baby!", "Yes is the only right answer!"
];
