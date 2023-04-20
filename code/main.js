const awnsers = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes - definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "Outlook not so good.",
  "My sources say no.",
  "Very doubtful.",
];

function shake() {
  const questionElem = document.querySelector("#question-input");
  const answerElem = document.querySelector(".eight-ball .answer p");
  const awnserIndex = Math.floor(Math.random() * messages.length);
  const awnser = awnsers[awnserIndex];

  if (questionElem.value.trim() !== "") {
    answerElem.innerText = awnser;
    questionElem.value = "";
  }
}
