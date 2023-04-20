const awnsers = [
  "Ja, 100% zeker",
  "JA!!!",
  "Geen twijfel mogelijk, ja",
  "Ik vermoed van wel",
  "misschien",
  "Mogelijks wel maar de kans is klein",
  "Er is hoop, maar ik zou er niet op rekenen",
  "Kan ik op dit moment niet beantwoorden",
  "Helemaal niet",
  "Nee",
  "Geen kans",
  "Reken er niet op",
  "Negatief",
  "Heel onwaarschijnlijk",
];

function shake() {
  const questionElem = document.querySelector("#question-input");
  const answerElem = document.querySelector(".eight-ball .answer p");
  const awnserIndex = Math.floor(Math.random() * awnsers.length);
  const awnser = awnsers[awnserIndex];

  if (questionElem.value.trim() !== "") {
    answerElem.innerText = awnser;
    questionElem.value = "";
  }
}
