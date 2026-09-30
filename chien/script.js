const facts = [
  'Le nez d’un chien est si sensible qu’il peut suivre une piste plusieurs heures après le passage de quelqu’un.',
  'Les chiens communiquent beaucoup avec leur corps : le regard, la posture et la distance comptent autant que les sons.',
  'Un chien possède une ouïe plus sensible que la nôtre et perçoit des sons plus aigus.',
  'Renifler pendant une promenade est une activité mentale importante, pas seulement une pause.',
  'Les chiens peuvent apprendre à reconnaître des dizaines de mots, surtout quand ils sont associés à des gestes et des expériences.'
];

const factButton = document.querySelector('#fact-button');
const factText = document.querySelector('#fact-text');
let previousFactIndex = 0;

factButton.addEventListener('click', () => {
  let nextFactIndex = Math.floor(Math.random() * facts.length);

  while (facts.length > 1 && nextFactIndex === previousFactIndex) {
    nextFactIndex = Math.floor(Math.random() * facts.length);
  }

  previousFactIndex = nextFactIndex;
  factText.textContent = facts[nextFactIndex];
});